import { FC, useEffect, useState } from "react";
import CarsList from "./CarsList";
import axios from "axios";
import { CarList } from "../types/CarAttribute";

type IndexPageProps = {
    renderHandler: (value:string) => void;
    stateId: (value: number) => void;
    refreshStatus : boolean
};

const IndexPage: FC<IndexPageProps> = ({ renderHandler, stateId, refreshStatus }) => {
    const carRoute = "http://localhost:3000/cars/";
    const [carList, setList] = useState<CarList[]>([]);

    const fetchCar = async () => {
        const response = await axios.get(carRoute, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });

        const carData = await response.data;

        setList(carData);
    };

    useEffect(() => {
        fetchCar();
    }, []);

    useEffect(() => {
        fetchCar();
    }, [refreshStatus]);
    return (
        <>
            <div
                style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "24px",
                }}
            >
                <button
                    className="px-2 py-2"
                    style={{
                        border: "2px solid #0D28A6",
                        color: "#0D28A6",
                        fontWeight: "bold",
                        backgroundColor: "#CFD4ED",
                        fontSize: "14px",
                    }}
                >
                    All
                </button>
                <button
                    className="px-2 py-2"
                    style={{
                        border: "2px solid #AEB7E1",
                        color: "#AEB7E1",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    Small
                </button>
                <button
                    className="px-2 py-2"
                    style={{
                        border: "2px solid #AEB7E1",
                        color: "#AEB7E1",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    Medium
                </button>
                <button
                    className="px-2 py-2"
                    style={{
                        border: "2px solid #AEB7E1",
                        color: "#AEB7E1",
                        fontWeight: "bold",
                        fontSize: "14px",
                    }}
                >
                    Large
                </button>
            </div>
            <div style={{ width: "100%", height: "fit-content" }}>
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "24px",
                        justifyContent: "center",
                    }}
                    id="carContainer"
                >
                    {carList.map((car, index) => (
                        <CarsList
                            key={index}
                            id={car.id}
                            name={car.name}
                            price={car.daily_price}
                            image={car.image}
                            start_rent={car.start_rent}
                            finish_rent={car.finish_rent}
                            updated_at={car.updated_at}
                            stateId={stateId}
                            renderHandler={renderHandler}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default IndexPage;
