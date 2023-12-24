import React from 'react'
const Hero = () => {
    return (
        <section className="mb-5 hero" data-testid='hero-id'>
            <nav className="navbar navbar-expand-lg">
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

            <div className="overflow-hidden min-vh-100">
                <div className="row d-lg-flex align-items-center min-vh-100">
                    <div className="p-4 col-lg-6 ps-lg-5 heading">
                        <h1>
                            Sewa & Rental Mobil Terbaik di kawasan Palembang
                        </h1>
                        <p
                            style={{
                                maxWidth: '468px',
                                marginTop: '16px',
                                marginBottom: '16px'
                            }}
                        >
                            Selamat datang di Binar Car Rental. Kami menyediakan
                            mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil
                            selama 24 jam.{' '}
                        </p>
                        <a className="btn btn-success rounded-0 fw-semibold" href="/cars" data-testid='redirect-button'>
                            Mulai Sewa Mobil
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <img
                            src="https://i.ibb.co/hyxmhSY/car.png"
                            width="100%"
                            height="100%"
                            className="car-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
