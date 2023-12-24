import React, { type FC } from 'react'
import AddCar from './AddCar'
import EditCar from './EditCar'
import IndexPage from './IndexPage'
import StatusModal from './StatusModal'

interface MainProps {
  crudValue: string
  renderHandler: (value: string) => void
  idValue: number
  setId: (value: number) => void
  statusHandler: (value: string) => void
  crudStatus: string
  isRefresh: boolean
}

const MainContainer: FC<MainProps> = ({
    crudValue,
    renderHandler,
    idValue,
    setId,
    statusHandler,
    crudStatus,
    isRefresh
}) => {
    const textValue = () => {
        switch (crudValue) {
        case 'add':
            return 'Add New Car'
        case 'edit':
            return 'Edit Car'
        default:
            return 'List Car'
        }
    }

    const renderComp = () => {
        switch (crudValue) {
        case 'add':
            return (
                <AddCar
                    renderHandler={renderHandler}
                    statusHandler={statusHandler}
                />
            )
        case 'edit':
            return (
                <EditCar
                    renderHandler={renderHandler}
                    statusHandler={statusHandler}
                    idCar={idValue}
                />
            )
        default:
            return (
                <IndexPage renderHandler={renderHandler} stateId={setId} refreshStatus={isRefresh}/>
            )
        }
    }

    const dynamicHeight = crudValue === 'index' ? 'fit-content' : '100%'

    return (
        <div
            style={{
                backgroundColor: '#F4F5F7',
                height: dynamicHeight,
                width: '100%',
                position: 'relative'
            }}
        >
            {crudStatus !== '' && <StatusModal status={crudStatus} />}
            <div
                style={{
                    height: '100%',
                    paddingTop: '32px',
                    paddingLeft: '25px'
                }}
            >
                <div style={{ marginBottom: '20px' }}>
                    <h1
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1',
                            fontWeight: 'bold',
                            fontSize: '16px'
                        }}
                    >
                        Cars
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path
                                    d="M6 12L10 8L6 4"
                                    stroke="#222222"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <span
                            style={{
                                fontWeight: 'normal',
                                color: 'gray',
                                fontSize: '14px'
                            }}
                        >
                            {textValue()}
                        </span>
                    </h1>
                </div>
                <div
                    style={{
                        marginBottom: '24px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingRight: '10px'
                    }}
                >
                    <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        {textValue()}
                    </h1>

                    {crudValue === 'index' && (
                        <button
                            className="px-4 py-2"
                            style={{
                                height: '100%',
                                backgroundColor: '#0D28A6',
                                color: 'white',
                                fontWeight: 'bold',
                                fontSize: '14px'
                            }}
                            onClick={() => { renderHandler('add') }}
                        >
                            + Add New Car
                        </button>
                    )}
                </div>
                {renderComp()}
            </div>
        </div>
    )
}

export default MainContainer
