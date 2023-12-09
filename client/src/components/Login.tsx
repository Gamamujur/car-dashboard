import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from "axios";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";

const Login = () => {
    const apiRoute = "http://localhost:3000/v1/user/login";
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const [isError, setError] = useState(false);
    
    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailValue = emailRef.current?.value;
        const passwordValue = passwordRef.current?.value;

        try {
            const response = await axios.post(apiRoute, {
                email: emailValue,
                password: passwordValue,
            });

            localStorage.setItem('token', response.data['Logged In'])
            setError(false);
            navigate('/crud-cars')
        } catch (error) {
            setError(true);
        }
    };
    return (
        <div className="overflow-x-hidden">
            <div className="row vh-100">
                <div className="col-md-8 d-flex align-items-center">
                    <img
                        src="./images/bg.png"
                        alt="Login Page Image"
                        className="mx-auto img-fluid h-100 object-fit-cover"
                    />
                </div>
                <div className=" col-md-4 d-flex align-items-center">
                    <div className="p-4 w-100">
                        <svg
                            width="100"
                            height="34"
                            viewBox="0 0 100 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ marginBottom: "32px" }}
                        >
                            <rect width="100" height="34" fill="#CFD4ED" />
                        </svg>

                        <h2
                            className="text-start"
                            style={{ marginBottom: "32px" }}
                        >
                            Welcome, Admin BCR
                        </h2>
                        {isError && (
                            <div className="mb-4" style={{ backgroundColor: '#D00C1A1A' }}>
                                <p className="p-3 text-danger">
                                    Masukkan username dan password yang benar.
                                    Perhatikan penggunaan huruf kapital.
                                </p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="mb-4 form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    ref={emailRef}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="mb-4 form-control"
                                    id="password"
                                    placeholder="Password"
                                    ref={passwordRef}
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-white btn btn-block w-100"
                                style={{ backgroundColor: "#0D28A6" }}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
