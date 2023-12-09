

const OuterSidebar = () => {
    return (
        // <div className="w-[70px] h-full bg-[#0D28A6] flex-col flex items-center pt-[18px]">
        //     <div className="w-[34px] h-[34px] bg-[#CFD4ED] mb-[18px]"></div>
        //     <div className="w-full h-[64px] flex flex-col justify-center items-center">
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //         >
        //             <path
        //                 d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //             <path
        //                 d="M9 22V12H15V22"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //         </svg>
        //         <p className="text-[12px] text-white">Dashboard</p>
        //     </div>
        //     <div className="w-full h-[64px] flex flex-col justify-center items-center cursor-pointer bg-white/30">
        //         <svg
        //             xmlns="http://www.w3.org/2000/svg"
        //             width="24"
        //             height="24"
        //             viewBox="0 0 24 24"
        //             fill="none"
        //         >
        //             <path
        //                 d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //             <path
        //                 d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //             <path
        //                 d="M16 8H20L23 11V16H16V8Z"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //             <path
        //                 d="M16 3H1V16H16V3Z"
        //                 stroke="white"
        //                 strokeWidth="2"
        //                 strokeLinecap="round"
        //                 strokeLinejoin="round"
        //             />
        //         </svg>
        //         <p className="text-[12px] text-white">Cars</p>
        //     </div>
        // </div>

        <div style={{ width: '70px', height: '100%', backgroundColor: '#0D28A6', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '18px' }}>
        <div style={{ width: '34px', height: '34px', backgroundColor: '#CFD4ED', marginBottom: '18px' }}></div>
        <div style={{ width: '100%', height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9 22V12H15V22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p style={{ fontSize: '12px', color: 'white' }}>Dashboard</p>
        </div>
        <div style={{ width: '100%', height: '64px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', background: 'white/30' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 8H20L23 11V16H16V8Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16 3H1V16H16V3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p style={{ fontSize: '12px', color: 'white' }}>Cars</p>
        </div>
    </div>
    );
};

export default OuterSidebar;
