import { useUser } from "../../../Context/UserContext";
const Header = () => {
    const { user } = useUser();

    const username = user?.email.split('@')[0]
    const capital = username?.split('')[0].toLocaleUpperCase()

    return (
        <div style={{ height: "50px", width: "fit-content" }}>
            <div style={{ display: "flex", height: "100%", gap: "25px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                    >
                        <path
                            d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                            stroke="#D0D0D0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15.75 15.75L12.4875 12.4875"
                            stroke="#D0D0D0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div style={{ display: "flex" }}>
                        <input
                            type="search"
                            placeholder="Search"
                            style={{ padding: "4px", border: "0" }}
                        />
                        <button
                            style={{
                                paddingLeft: "12px",
                                paddingRight: "12px",
                                border: "1px solid #0D28A6",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                paddingTop: "8px",
                                paddingBottom: "8px",
                            }}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                    }}
                >
                    <div
                        style={{
                            width: "38px",
                            height: "38px",
                            backgroundColor: "#CFD4ED",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: "5px",
                        }}
                    >
                        <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
                            {capital}
                        </h1>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "2px",
                            alignContent: "center",
                        }}
                    >
                        <h1 style={{ fontSize: "14px", paddingTop: "10px" }}>
                            {username}
                        </h1>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            style={{ paddingTop: "10px" }}
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="#151515"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
