import axios from "axios";
import { FC, useState } from "react";
import { randomFunction, randomData } from "../types/RandomData";

type AddCarProps = {
    renderHandler: (value: string) => void;
    statusHandler: (value: string) => void;
};

export type FormType = {
    name: string;
    daily_price: string;
    size: string;
    image: File | string;
    start_rent: Date;
    finish_rent: Date;
    capacity: number;
    year: number;
    id_car_type: number;
    id_car_brand: number;
    transmission: string;
    description: string;
    available_at: Date;
};

const AddCar: FC<AddCarProps> = ({ renderHandler, statusHandler }) => {
    const postAPI = "http://localhost:3000/cars/post-car";
    const [formData, setForm] = useState<FormType>();
    const [isSubmitting, setSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;

        if (id === "image" && e.target instanceof HTMLInputElement) {
            const files = e.target.files;
            setForm(
                (prevData) =>
                    ({
                        ...prevData,
                        [id]: files?.[0] || null,
                    } as FormType)
            );
        } else {
            setForm(
                (prevData) =>
                    ({
                        ...prevData,
                        [id]: value,
                    } as FormType)
            );
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        

        const carType = document.getElementById(
            "id_car_type"
        ) as HTMLInputElement;
        const carBrand = document.getElementById(
            "id_car_brand"
        ) as HTMLInputElement;
        const carCapacity = document.getElementById(
            "capacity"
        ) as HTMLInputElement;
        const carYear = document.getElementById("id_year") as HTMLInputElement;
        const carTransmission = document.getElementById(
            "transmission"
        ) as HTMLInputElement;
        const carDate = document.getElementById(
            "available_at"
        ) as HTMLInputElement;
        const carDesc = document.getElementById(
            "id_description"
        ) as HTMLInputElement;

        if (!formData) {
            return;
        }
        
        const idType = carType.value;
        const idBrand = carBrand.value;
        const dataName = formData?.name;
        const dataPrice = formData?.daily_price;
        const dataSize = formData?.size;
        const dataImage = formData?.image;
        const dataStart = formData?.start_rent;
        const dataEnd = formData?.finish_rent;
        const dataCapacity = carCapacity.value;
        const dataYear = carYear.value;
        const dataTrans = carTransmission.value;
        const dataAvail = carDate.value;
        const dataDesc = carDesc.value;

        const formBody = {
            id_car_type: idType,
            id_car_brand: idBrand,
            name: dataName,
            daily_price: dataPrice,
            size: dataSize,
            image: dataImage,
            start_rent: new Date(dataStart).toISOString(),
            finish_rent: new Date(dataEnd).toISOString(),
            capacity: Number(dataCapacity),
            year: Number(dataYear),
            transmission: dataTrans,
            available_at: new Date(dataAvail).toISOString(),
            description: dataDesc,
        };

        try {
            setSubmitting(true);
            const response = await axios.post(postAPI, formBody, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status !== 200) {
                renderHandler("index");
                statusHandler("");
                setSubmitting(false)
                return;
            }
            renderHandler("index");
            statusHandler("added");
            return;
        } catch (error) {
            return error;
        }
    };

    return (
        <div
            style={{
                width: "100%",
                height: "fit-content",
                backgroundColor: "white",
                padding: "16px",
            }}
        >
            <form
                action=""
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
                onSubmit={handleSubmit}
            >
                <input
                    type="hidden"
                    id="id_car_type"
                    name="id_car_type"
                    value={Math.floor(Math.random() * 4) + 1}
                />
                <input
                    type="hidden"
                    id="id_car_brand"
                    name="id_car_brand"
                    value={Math.floor(Math.random() * 4) + 1}
                />

                <input
                    type="hidden"
                    id="capacity"
                    name="capacity"
                    value={randomFunction(randomData.capacity)}
                />
                <input
                    type="hidden"
                    id="id_year"
                    name="id_year"
                    value={randomFunction(randomData.year)}
                />

                <input
                    type="hidden"
                    id="transmission"
                    name="transmission"
                    value={randomFunction(randomData.transmission)}
                />

                <input
                    type="hidden"
                    id="available_at"
                    name="available_at"
                    value={randomFunction(randomData.available_at)}
                />

                <input
                    type="hidden"
                    id="id_description"
                    name="id_description"
                    value={randomFunction(randomData.description)}
                />

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="name" style={{ width: "147px" }}>
                        Nama<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="daily_price" style={{ width: "147px" }}>
                        Sewa Per Hari<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="text"
                        id="daily_price"
                        name="daily_price"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="ukuran" style={{ width: "147px" }}>
                        Ukuran
                    </label>
                    <select
                        id="size"
                        name="size"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        defaultValue={"small"}
                        required
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="imageFile" style={{ width: "147px" }}>
                        Foto<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="start_rent" style={{ width: "147px" }}>
                        Start Rent<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="date"
                        id="start_rent"
                        name="start_rent"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="finish_rent" style={{ width: "147px" }}>
                        Finish Rent<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        type="date"
                        id="finish_rent"
                        name="finish_rent"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div
                    style={{
                        position: "absolute",
                        width: "fit-content",
                        height: "fit-content",
                        bottom: "25px",
                        left: "25px",
                    }}
                >
                    <div style={{ display: "flex", gap: "16px" }}>
                        <button
                            style={{
                                padding: "8px",
                                border: "1px solid #0D28A6",
                                color: "#0D28A6",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                            id="cancelButton"
                            onClick={() => {
                                renderHandler("index");
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            style={{
                                padding: "8px",
                                border: "1px solid #0D28A6",
                                color: "white",
                                fontSize: "14px",
                                fontWeight: "bold",
                                backgroundColor: "#0D28A6",
                            }}
                            id="saveButton"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div
                                    className="spinner-border"
                                    role="status"
                                ></div>
                            ) : (
                                "Save"
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCar;
