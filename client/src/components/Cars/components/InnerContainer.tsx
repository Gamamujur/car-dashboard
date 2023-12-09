const InnerContainer = () => {
    return (
        <div style={{ width: "220px", paddingTop: "23px" }}>
            <div
                style={{
                    width: "100%",
                    padding: "11px 24px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontWeight: "bold",
                        color: "#8A8A8A",
                        fontSize: "14px",
                    }}
                >
                    CARS
                </h1>
            </div>
            <div
                style={{
                    width: "100%",
                    padding: "11px 24px",
                    backgroundColor: "#CFD4ED",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <h1
                    style={{
                        fontWeight: "bold",
                        color: "black",
                        fontSize: "14px",
                    }}
                >
                    List Cars
                </h1>
            </div>
        </div>
    );
};

export default InnerContainer;
