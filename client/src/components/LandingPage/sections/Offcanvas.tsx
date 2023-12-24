import React from 'react'
const Offcanvas = () => {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                    BCR
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link active"
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
    )
}

export default Offcanvas
