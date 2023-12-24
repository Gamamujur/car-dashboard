import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../../App.css'
import Footer from '../LandingPage/sections/Footer'
import Offcanvas from '../LandingPage/sections/Offcanvas'
import React, { useEffect, useState } from 'react'
import CarsCard from './components/CarsCard'
import axios from 'axios'
import { type CarAttribute } from './types/CarAttribute'

interface FormType {
  tipeDriver: string
  tanggal: string
  waktu: string
  jumlahPenumpang?: number
}

const SearchCar = () => {
    const [newCarData, setNewData] = useState<CarAttribute[]>([])
    const [filterCar, setFilter] = useState<CarAttribute[]>([])
    const [formInput, setForm] = useState<FormType | undefined>(undefined)

    const fetchCarData = async () => {
        axios
            .get(
                'http://localhost:3000/cars/'
            )
            .then((response) => {
                const data = response.data
                const cloneData = [...data]
                const newClone = cloneData.map((car: CarAttribute, index) => {
                    const driverType =
                        index % 2 === 0 ? 'dengan supir' : 'tanpa supir'
                    return {
                        ...car,
                        driverType
                    }
                })
                setNewData(newClone)
            })
            .catch((error) => {
                return error
            })
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target
        setForm(
            (prevData) =>
                ({
                    ...prevData,
                    [id]: value
                } as FormType)
        )
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (formInput) {
            const tipeDriverValue = formInput.tipeDriver
            const tanggalValue = formInput.tanggal
            const waktuValue = formInput.waktu
            const jumlahPenumpangValue = formInput.jumlahPenumpang

            if (
                waktuValue === '' ||
                tanggalValue === '' ||
                tipeDriverValue === ''
            ) {
                return
            }

            if (jumlahPenumpangValue && jumlahPenumpangValue > 0) {
                const availableCars = newCarData.filter(
                    (car) =>
                        car.driverType === tipeDriverValue &&
                        new Date(car.available_at) >
                            new Date(`${tanggalValue} ${waktuValue}`) &&
                        car.capacity === Number(jumlahPenumpangValue)
                )
                setFilter(availableCars)
            } else {
                const availableCars = newCarData.filter(
                    (car) =>
                        car.driverType === tipeDriverValue &&
                        new Date(car.available_at) >
                            new Date(`${tanggalValue} ${waktuValue}`)
                )
                setFilter(availableCars)
            }
        }
    }

    useEffect(() => {
        fetchCarData()
    }, [])

    return (
        <>
            <section className="hero-1 position-relative">
                <nav className="navbar navbar-expand-lg navbar-cars">
                    <div className="container-lg">
                        <a className="navbar-brand" href="#"></a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end">
                            <ul className="gap-4 navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="#service"
                                    >
                                        Our Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#why-us">
                                        Why Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial">
                                        Testimonial
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#faq">
                                        FAQ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-success rounded-0 fw-semibold">
                                        Register
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="p-0 overflow-hidden">
                    <div className="p-0 row d-lg-flex align-items-center hero-2">
                        <div className="p-4 col-lg-6 ps-lg-5 heading">
                            <h1>
                                Sewa &amp; Rental Mobil Terbaik di kawasan
                                Palembang
                            </h1>
                            <p
                                style={{
                                    maxWidth: '468px',
                                    marginTop: '16px',
                                    marginBottom: '16px'
                                }}
                            >
                                Selamat datang di Binar Car Rental. Kami
                                menyediakan mobil kualitas terbaik dengan harga
                                terjangkau. Selalu siap melayani kebutuhanmu
                                untuk sewa mobil selama 24 jam.
                            </p>
                        </div>
                        <div className="p-0 col-lg-6">
                            <img
                                src="https://i.ibb.co/hyxmhSY/car.png"
                                width="100%"
                                height="100%"
                                className="car-img"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-lg form-container position-absolute rounded-3">
                    <form
                        className="row g-2 align-items-center h-100 w-100 justify-content-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="col-3">
                            <label htmlFor="tipeDriver">Tipe Driver</label>
                            <select
                                className="form-select"
                                id="tipeDriver"
                                onChange={handleChange}
                                defaultValue='DEFAULT'
                            >
                                <option disabled={true} value="DEFAULT">
                                    Pilih Tipe Driver
                                </option>
                                <option value="dengan supir">
                                    Dengan Supir
                                </option>
                                <option value="tanpa supir">
                                    Tanpa Supir ( Lepas Kunci )
                                </option>
                            </select>
                        </div>

                        <div className="col-2">
                            <label htmlFor="tanggal">Tanggal</label>
                            <input
                                type="date"
                                className="form-control"
                                id="tanggal"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-2">
                            <label htmlFor="waktu">Waktu Jemput/Ambil</label>
                            <input
                                type="time"
                                className="form-control"
                                id="waktu"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-3">
                            <label htmlFor="jumlahPenumpang">
                                Jumlah Penumpang (optional)
                            </label>
                            <div className="input-group">
                                <input
                                    type="number"
                                    className="form-control border-end-0"
                                    id="jumlahPenumpang"
                                    min="0"
                                    onChange={handleChange}
                                    max="6"
                                />

                                <span className="bg-white input-group-text border-start-0">
                                    <i>
                                        <img
                                            src={'./images/fi_users.png'}
                                            className="img-fluid"
                                        />
                                    </i>
                                </span>
                            </div>
                        </div>

                        <div className="col-auto">
                            <br />
                            <button
                                className="btn btn-success"
                                id="search-car"
                                type="submit"
                                data-testid="search-car-button"
                            >
                                Cari Mobil
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <div className="container mt-5 cars-parent">
                <div className="row g-3" id="cars-container">
                    {filterCar.map((car, index) => (
                        <CarsCard
                            key={index}
                            image={car.image}
                            name={car.name}
                            price={car.daily_price}
                            capacity={car.capacity}
                            description={car.description}
                            transmission={car.transmission}
                            year={car.year}
                        />
                    ))}
                </div>
            </div>

            <Footer />
            <Offcanvas />
        </>
    )
}

export default SearchCar
