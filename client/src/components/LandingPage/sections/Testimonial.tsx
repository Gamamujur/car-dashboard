import React, { useState, useEffect } from 'react'

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [testimonialWidth, setTestimonialWidth] = useState(0)

    useEffect(() => {
        const width =
            document.querySelector('.carousel-inner')?.clientWidth ?? 0
        setTestimonialWidth(width)
    }, [])

    useEffect(() => {
        showTestimonial(currentTestimonial)
    }, [currentTestimonial, testimonialWidth])

    const showTestimonial = (testimonialIndex: number) => {
        const testimonialContainer = document.querySelector('.carousel-hug')
        if (testimonialContainer) {
            const offset = testimonialIndex * testimonialWidth
            /* // eslint-disable-next-line
            @typescript-eslint/ban-ts-comment //
            @ts-expect-error */
            testimonialContainer.style.transform = `translateX(-${offset}px)`
        }
    }

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % 3)
    }

    const previousTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + 3) % 3)
    }

    return (
        <>
            <section
                className="px-2 overflow-x-hidden Testimonial d-flex flex-column"
                id="testimonial"
            >
                <div>
                    <h2 className="mb-3 text-center">Testimonial</h2>
                    <p className="mb-3 text-center">
                        Berbagai review positif dari pelanggan kami
                    </p>
                </div>

                <div className="gap-3 d-flex carousel-container">
                    <div className="gap-4 d-flex carousel-hug">
                        <div className="carousel-inner h-100" id="testimonial1">
                            <div className="gap-4 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                                <img
                                    src="https://i.ibb.co/7gWvKnQ/Picture2.png"
                                    className="rounded-circle"
                                    alt="..."
                                />
                                <div>
                                    <svg
                                        width="80"
                                        height="16"
                                        viewBox="0 0 80 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                                            fill="#F9CC00"
                                        />
                                    </svg>
                                    <p className="mt-2 ml-5 text-start">
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="mt-2 ml-5 text-start"
                                        style={{ fontWeight: '600' }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-inner h-100" id="testimonial2">
                            <div className="gap-4 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                                <img
                                    src="https://i.ibb.co/7gWvKnQ/Picture2.png"
                                    className="rounded-circle"
                                    alt="..."
                                />
                                <div>
                                    <svg
                                        width="80"
                                        height="16"
                                        viewBox="0 0 80 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                                            fill="#F9CC00"
                                        />
                                    </svg>
                                    <p className="mt-2 ml-5 text-start">
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="mt-2 ml-5 text-start"
                                        style={{ fontWeight: '600' }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-inner h-100" id="testimonial3">
                            <div className="gap-4 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                                <img
                                    src="https://i.ibb.co/BjtyFLs/Picture3.png"
                                    className="rounded-circle"
                                    alt="..."
                                />
                                <div>
                                    <svg
                                        width="80"
                                        height="16"
                                        viewBox="0 0 80 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                                            fill="#F9CC00"
                                        />
                                    </svg>
                                    <p className="mt-2 ml-5 text-start">
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="mt-2 ml-5 text-start"
                                        style={{ fontWeight: '600' }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-inner h-100" id="testimonial4">
                            <div className="gap-4 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                                <img
                                    src="https://i.ibb.co/BjtyFLs/Picture3.png"
                                    className="rounded-circle"
                                    alt="..."
                                />
                                <div>
                                    <svg
                                        width="80"
                                        height="16"
                                        viewBox="0 0 80 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                                            fill="#F9CC00"
                                        />
                                    </svg>
                                    <p className="mt-2 ml-5 text-start">
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="mt-2 ml-5 text-start"
                                        style={{ fontWeight: '600' }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-inner h-100" id="testimonial5">
                            <div className="gap-4 d-flex flex-lg-row flex-column align-items-center justify-content-center">
                                <img
                                    src="https://i.ibb.co/7gWvKnQ/Picture2.png"
                                    className="rounded-circle"
                                    alt="..."
                                />
                                <div>
                                    <svg
                                        width="80"
                                        height="16"
                                        viewBox="0 0 80 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                                            fill="#F9CC00"
                                        />
                                        <path
                                            d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                                            fill="#F9CC00"
                                        />
                                    </svg>
                                    <p className="mt-2 ml-5 text-start">
                                        “Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod”
                                    </p>
                                    <p
                                        className="mt-2 ml-5 text-start"
                                        style={{ fontWeight: '600' }}
                                    >
                                        John Dee 32, Bromo
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-3 mx-auto mt-3 d-flex">
                    <button
                        className="bg-transparent border-0"
                        onClick={previousTestimonial}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="15.5"
                                fill="none"
                                stroke="#C4C4C4"
                            />
                            <circle
                                className="hover-circle"
                                cx="16"
                                cy="16"
                                r="15"
                                fill="#5CB85F"
                            />
                            <path
                                className="hover-path"
                                d="M18.5 21L13.5 16L18.5 11"
                                stroke="#222222"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        className="bg-transparent border-0"
                        onClick={nextTestimonial}
                    >
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="16"
                                cy="16"
                                r="15.5"
                                fill="none"
                                stroke="#C4C4C4"
                            />
                            <circle
                                className="hover-circle"
                                cx="16"
                                cy="16"
                                r="15"
                                fill="#5CB85F"
                            />
                            <path
                                className="hover-path"
                                d="M13.5 21L18.5 16L13.5 11"
                                stroke="#222222"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Testimonial
