import { FC, useEffect, useRef, useState } from "react";
import { FormType } from "./AddCar";
import axios from "axios";

type EditCarProps = {
    renderHandler: (value: string) => void;
    statusHandler: (value: string) => void;
    idCar: number;
};

const EditCar: FC<EditCarProps> = ({ renderHandler, statusHandler, idCar }) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [formData, setForm] = useState<FormType>({
        name: "",
        daily_price: "",
        size: "",
        image: new File([], ""),
        start_rent: new Date(),
        finish_rent: new Date(),
        capacity: 0,
        year: 0,
        id_car_type: 0,
        id_car_brand: 0,
        transmission: "",
        description: "",
        available_at: new Date(),
    });
    const [isSubmitting, setSubmitting] = useState(false);

    const patchAPI = `http://localhost:3000/cars/car-edit/${idCar}`;
    const getAPI = `http://localhost:3000/cars/get/${idCar}`;

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

    const handleSubmit = async () => {
        setSubmitting(true);

        if (!formData) {
            return;
        }
        const idType = formData?.id_car_type;
        const idBrand = formData?.id_car_brand;
        const dataName = formData?.name;
        const dataPrice = formData?.daily_price;
        const dataSize = formData?.size;
        const dataImage = formData?.image;
        const dataStart = formData?.start_rent;
        const dataEnd = formData?.finish_rent;
        const dataCapacity = formData.capacity;
        const dataYear = formData.year;
        const dataTrans = formData.transmission;
        const dataAvail = formData.available_at;
        const dataDesc = formData.description;

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
            const response = await axios.put(patchAPI, formBody, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status !== 200) {
                renderHandler("index");
                statusHandler("");
                return;
            }
            renderHandler("index");
            statusHandler("update");
            return;
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(getAPI, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                });

                setForm(response.data);
            } catch (error) {
                return error;
            }
        };

        fetch();
    }, []);

    const handleLabelClick = () => {
        if (fileInput.current) {
            fileInput.current.click();
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <input
                    type="hidden"
                    id="id_car_type"
                    name="id_car_type"
                    value={formData?.id_car_type}
                />
                <input
                    type="hidden"
                    id="id_car_brand"
                    name="id_car_brand"
                    value={formData?.id_car_brand}
                />

                <input
                    type="hidden"
                    id="capacity"
                    name="capacity"
                    value={formData?.capacity}
                />
                <input
                    type="hidden"
                    id="id_year"
                    name="id_year"
                    value={formData?.year}
                />

                <input
                    type="hidden"
                    id="transmission"
                    name="transmission"
                    value={formData?.transmission}
                />

                <input
                    type="hidden"
                    id="available_at"
                    name="available_at"
                    value={String(formData?.available_at)}
                />

                <input
                    type="hidden"
                    id="id_description"
                    name="id_description"
                    value={formData?.description}
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
                        value={formData.name}
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
                        value={formData.daily_price}
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
                        value={formData.size}
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
                        ref={fileInput}
                        type="file"
                        id="image"
                        name="image"
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        onChange={handleChange}
                        className={
                            typeof formData.image === "object" ? "" : "d-none"
                        }
                        required
                    />

                    <input
                        type="text"
                        value={String(formData.image)}
                        style={{
                            padding: "8px",
                            border: "1px solid black",
                            width: "339px",
                        }}
                        className={
                            typeof formData.image === "object" ? "d-none" : ""
                        }
                        readOnly
                        onClick={handleLabelClick}
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
                        value={
                            new Date(formData.start_rent)
                                .toISOString()
                                .split("T")[0]
                        }
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
                        value={
                            new Date(formData.finish_rent)
                                .toISOString()
                                .split("T")[0]
                        }
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
                            disabled={isSubmitting}
                            onClick={handleSubmit}
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
            </div>
        </div>
    );
};

export default EditCar;
