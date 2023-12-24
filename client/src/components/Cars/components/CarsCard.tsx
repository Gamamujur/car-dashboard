import React, { type FC } from 'react'

interface CarsCardProps {
  image: string
  name: string
  price: string | number
  description: string
  capacity: string | number
  transmission: string
  year: number | string
}

const CarsCard: FC<CarsCardProps> = ({
    name,
    image,
    price,
    description,
    capacity,
    transmission,
    year
}) => {
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '18rem' }}>
                <img
                    src={image}
                    className="card-img-top"
                    alt={name}
                    style={{ objectFit: 'cover' }}
                    height="250px"
                    width="350px"
                />
                <div className="card-body">
                    <h5 className="card-title" style={{ fontSize: '14px' }}>
                        {name}
                    </h5>
                    <p
                        className="card-text fw-bold"
                        style={{ fontSize: '16px' }}
                    >
                        Rp {price.toLocaleString()} / hari
                    </p>
                    <p className="card-text" style={{ fontSize: '14px' }}>
                        {description}
                    </p>
                    <div className="d-flex-row align-items-center">
                        <div className="mb-2 d-flex align-items-center">
                            <i>
                                <img src="./images/fi_users.png" />
                            </i>
                            <span className="ms-2" style={{ fontSize: '14px' }}>
                                {capacity} orang
                            </span>
                        </div>
                        <div className="mb-2 d-flex align-items-center">
                            <i>
                                <img src="./images/fi_settings.png" />
                            </i>
                            <span className="ms-2" style={{ fontSize: '14px' }}>
                                {transmission}
                            </span>
                        </div>
                        <div className="d-flex align-items-center">
                            <i>
                                <img src="./images/fi_calendar.png" />
                            </i>
                            <span className="ms-2" style={{ fontSize: '14px' }}>
                                Tahun {year}
                            </span>
                        </div>
                    </div>
                    <a href="#" className="mt-3 btn btn-success w-100">
                        Pilih Mobil
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CarsCard
