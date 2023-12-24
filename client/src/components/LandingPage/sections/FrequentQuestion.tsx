import React from 'react'

const FrequentQuestion = () => {
    return (
        <>
            <section className="FQA" id="faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <div className="accordion" id="accordionExample">
                                <div className="mb-3 accordion-item border-1">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            Apa saja syarat yang dibutuhkan?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Deleniti qui consequatur animi
                                            impedit est voluptatem ab. Quasi
                                            tempore reiciendis nulla.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 border-2 accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Berapa hari minimal sewa mobil lepas
                                            kunci?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Deleniti qui consequatur animi
                                            impedit est voluptatem ab. Quasi
                                            tempore reiciendis nulla.
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 border-2 accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Berapa hari sebelumnya sebaiknya
                                            booking sewa mobil?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Deleniti qui consequatur animi
                                            impedit est voluptatem ab. Quasi
                                            tempore reiciendis nulla.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 border-2 accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                        >
                                            Apakah Ada biaya antar-jemput?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFour"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Deleniti qui consequatur animi
                                            impedit est voluptatem ab. Quasi
                                            tempore reiciendis nulla.
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3 border-2 accordion-item">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive"
                                            aria-expanded="false"
                                            aria-controls="collapseFive"
                                        >
                                            Bagaimana jika terjadi kecelakaan
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseFive"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Lorem ipsum dolor sit amet
                                            consectetur, adipisicing elit.
                                            Deleniti qui consequatur animi
                                            impedit est voluptatem ab. Quasi
                                            tempore reiciendis nulla.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FrequentQuestion
