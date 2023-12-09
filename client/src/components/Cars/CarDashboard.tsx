import OuterSidebar from "./components/OuterSidebar";
import Header from "./components/Header";
import InnerContainer from "./components/InnerContainer";
import MainContainer from "./components/MainContainer";
import DeleteModal from "./components/DeleteModal";
import { useState } from "react";
import "../../App.css";

const CarDashboard = () => {
    const [crudValue, setValue] = useState("index");
    const [carID, setCarID] = useState(0);
    const [crudStatus, setStatus] = useState("");
    const [isRefresh, setRefresh] = useState(false);

    const statusHandler = (value: string) => {
        setStatus(value);
        setTimeout(() => {
            setStatus("");
        }, 3000);
    };

    const dynamicStyles = {
        width: "100vw",
        height: "100vh",
    };

    const renderHandler = (value: string) => {
        setValue(value);
    };

    const refreshHandler = () => {
        setRefresh(!isRefresh);
    };

    return (
        <>
            <div style={dynamicStyles}>
                <div style={{ display: "flex", width: "100%", height: "100%" }}>
                    <OuterSidebar />

                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            overflowX: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: "70px",
                                display: "flex",
                                alignItems: "center",
                                padding: "18px 24px",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: "100px",
                                        height: "34px",
                                        backgroundColor: "#CFD4ED",
                                        marginRight: "120px",
                                    }}
                                ></div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 18H21"
                                            stroke="#151515"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3 12H21"
                                            stroke="#151515"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M3 6H21"
                                            stroke="#151515"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <Header />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <InnerContainer />
                            <MainContainer
                                isRefresh={isRefresh}
                                crudValue={crudValue}
                                renderHandler={renderHandler}
                                idValue={carID}
                                setId={setCarID}
                                crudStatus={crudStatus}
                                statusHandler={statusHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {crudValue === "delete" && (
                <DeleteModal
                    refreshHandler={refreshHandler}
                    modalHandler={renderHandler}
                    carID={carID}
                    setID={setCarID}
                    statusHandler={statusHandler}
                />
            )}
        </>
    );
};

export default CarDashboard;
