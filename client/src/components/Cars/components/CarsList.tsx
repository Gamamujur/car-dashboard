import { FC } from "react";

type CarListProps = {
    id: number;
    name: string;
    price: number;
    image: string;
    start_rent: Date;
    finish_rent: Date;
    updated_at: Date;
    renderHandler: (value: string) => void;
    stateId: (value: number) => void;
};

const CarsList: FC<CarListProps> = ({
    id,
    name,
    price,
    start_rent,
    image,
    finish_rent,
    updated_at,
    renderHandler,
    stateId,
}) => {
    const dateFormat = (stringDate: Date, minute?: boolean) => {
        const dateObject = new Date(stringDate);

        const day = dateObject.getDate();
        const month = dateObject.toLocaleString("default", { month: "short" });
        const year = dateObject.getFullYear();
        let formattedDate;

        if (minute) {
            const hours = dateObject.getHours();
            const minutes = dateObject.getMinutes();
            formattedDate = `${day} ${month} ${year} ${hours}:${minutes}`;
        } else {
            formattedDate = `${day} ${month} ${year}`;
        }
        return formattedDate;
    };

    const handleDelete = async (id: number) => {
        stateId(id);
        renderHandler("delete");
    };

    return (
        <div
            style={{
                width: "351px",
                height: "446px",
                border: "#000",
                borderRadius: "8px",
                backgroundColor: "#fff",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src={image}
                alt={name}
                style={{
                    width: "270px",
                    height: "160px",
                    marginBottom: "47px",
                    objectFit: "contain",
                }}
            />
            <div style={{ alignSelf: "start" }}>
                <h1 style={{ fontSize: "14px" }}>{name}</h1>
                <h1 style={{ marginBottom: "16px", fontSize: "24px" }}>
                    {price.toLocaleString()}
                </h1>
                <p style={{ fontSize: "14px" }}>
                    {dateFormat(start_rent)} - {dateFormat(finish_rent)}
                </p>
                <p style={{ marginBottom: "24px", fontSize: "14px" }}>
                    Updated at {dateFormat(updated_at, true)}
                </p>
                <div
                    style={{
                        display: "flex",
                        gap: "2px",
                        alignSelf: "center",
                        fontWeight: "bold",
                    }}
                >
                    <button
                        style={{
                            padding: "8px 24px",
                            border: "2px solid #FA2C5A",
                            width: "143px",
                            color: "#FA2C5A",
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                            justifyContent: "center",
                            backgroundColor: "white",
                        }}
                        id="carDelete"
                        onClick={() => handleDelete(id)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                        >
                            <path
                                d="M2.5 4.5H4H16"
                                stroke="#FA2C5A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.25 4.5V3C6.25 2.60218 6.40804 2.22064 6.68934 1.93934C6.97064 1.65804 7.35218 1.5 7.75 1.5H10.75C11.1478 1.5 11.5294 1.65804 11.8107 1.93934C12.092 2.22064 12.25 2.60218 12.25 3V4.5M14.5 4.5V15C14.5 15.3978 14.342 15.7794 14.0607 16.0607C13.7794 16.342 13.3978 16.5 13 16.5H5.5C5.10218 16.5 4.72064 16.342 4.43934 16.0607C4.15804 15.7794 4 15.3978 4 15V4.5H14.5Z"
                                stroke="#FA2C5A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M10.75 8.25V12.75"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M7.75 8.25V12.75"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Delete
                    </button>
                    <button
                        style={{
                            padding: "8px 24px",
                            border: "2px solid #5CB85F",
                            width: "143px",
                            color: "#fff",
                            backgroundColor: "#5CB85F",
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                            justifyContent: "center",
                        }}
                        id="carEdit"
                        onClick={() => {
                            stateId(id);
                            renderHandler("edit");
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_48688_238)">
                                <path
                                    d="M9 3H3.75C3.35218 3 2.97064 3.15804 2.68934 3.43934C2.40804 3.72064 2.25 4.10218 2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V9.75"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M14.625 1.875C14.9234 1.57663 15.328 1.40901 15.75 1.40901C16.172 1.40901 16.5766 1.57663 16.875 1.875C17.1734 2.17337 17.341 2.57805 17.341 3C17.341 3.42196 17.1734 3.82663 16.875 4.125L9.75 11.25L6.75 12L7.5 9L14.625 1.875Z"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_48688_238">
                                    <rect
                                        width="18"
                                        height="18"
                                        fill="white"
                                        transform="translate(0.75)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarsList;
