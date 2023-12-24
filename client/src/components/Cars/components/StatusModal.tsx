import React, { type FC } from 'react'

interface StatusModalProps {
  status: string
}
/* istanbul ignore next */
const StatusModal: FC<StatusModalProps> = ({ status }) => {
    const statusValue = () => {
        switch (status) {
        case 'added':
            return { bgClass: 'bg-success', text: 'Data Berhasil Ditambah' }
        case 'update':
            return { bgClass: 'bg-warning', text: 'Data Berhasil Diupdate' }
        case 'delete':
            return { bgClass: 'bg-dark', text: 'Data Berhasil Dihapus' }
        default:
            return { bgClass: 'bg-danger', text: 'Unknown Status' }
        }
    }

    return (
        <div
            className={statusValue().bgClass}
            style={{
                width: '550px',
                height: '60px',
                position: 'absolute',
                top: 25,
                left: '25%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '10px'
            }}
        >
            <p className="text-center text-white" style={{ fontSize: '14px', fontWeight: 'bold' }}>
                {statusValue().text}
            </p>
        </div>
    )
}

export default StatusModal
