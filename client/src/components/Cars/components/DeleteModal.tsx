import React, { type FC, useState } from 'react'
import Imagefile from './Imagefile'
import axios from 'axios'

interface DeleteModalProps {
  modalHandler: (value: string) => void
  carID: number
  setID: (value: number) => void
  statusHandler: (value: string) => void
  refreshHandler: () => void
}
const DeleteModal: FC<DeleteModalProps> = ({
    modalHandler,
    carID,
    statusHandler,
    refreshHandler
}) => {
    const deleteAPI = `http://localhost:3000/cars/car-delete/${carID}`
    const [isDeleting, setDeleting] = useState(false)

    const deleteHandler = async () => {
        try {
            setDeleting(true)
            const responseDelete = await axios.delete(deleteAPI, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })

            if (responseDelete.status !== 200) {
                modalHandler('unknown')
                statusHandler('')
                return
            }
            refreshHandler()
            setDeleting(false)
            modalHandler('index')
            statusHandler('delete')
        } catch (error) {
            return error
        }
    }
    /* istanbul ignore next */
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.3)'
            }}
            id="deleteModal"
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}
            >
                <div
                    style={{
                        width: '387px',
                        height: '333px',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '32px 24px',
                        gap: '2'
                    }}
                >
                    <svg
                        width="153"
                        height="121"
                        viewBox="0 0 153 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <rect
                            width="153"
                            height="69.0858"
                            fill="url(#pattern0)"
                        />
                        <rect
                            y="42.33"
                            width="153"
                            height="78.67"
                            fill="url(#pattern1)"
                        />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlinkHref="#image0_18347_9523"
                                    transform="matrix(0.00261006 0 0 0.00578035 -0.022013 0)"
                                />
                            </pattern>
                            <pattern
                                id="pattern1"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use
                                    xlinkHref="#image1_18347_9523"
                                    transform="matrix(0.00261006 0 0 0.00507614 -0.022013 0)"
                                />
                            </pattern>

                            <Imagefile />
                        </defs>
                    </svg>
                    <h1 style={{ fontWeight: 'bold', fontSize: '16px' }}>
                        Menghapus Data Mobil
                    </h1>
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '14px',
                            marginBottom: '4px',
                            padding: '4px'
                        }}
                    >
                        Setelah dihapus, data mobil tidak dapat dikembalikan.
                        Yakin ingin menghapus?
                    </p>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                            style={{
                                paddingLeft: '12px',
                                paddingRight: '12px',

                                backgroundColor: '#0D28A6',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                width: '87px',
                                height: '36px'
                            }}
                            id="yesModal"
                            onClick={deleteHandler}
                        >
                            {isDeleting
                                ? (
                                    <div
                                        className="spinner-border"
                                        role="status"
                                    ></div>
                                )
                                : (
                                    'Ya'
                                )}
                        </button>
                        <button
                            style={{
                                paddingLeft: '12px',
                                paddingRight: '12px',

                                backgroundColor: 'white',
                                color: '#0D28A6',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                width: '87px',
                                height: '36px',
                                border: '1px solid #0D28A6'
                            }}
                            id="cancelModal"
                            onClick={() => { modalHandler('index') }}
                        >
                            Tidak
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
