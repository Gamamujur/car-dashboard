import axios from "axios";
import { FC, ReactElement, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

type PrivateRouteProps = {
    children: ReactElement;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
    const getUserRoute = "http://localhost:3000/v1/user/getUser";
    const token = localStorage.getItem("token");

    const { user, setUser } = useUser();

    const getData = async () => {
        try {
            const getUser = await axios.get(getUserRoute, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const userData = {
                id: getUser.data.Success.id,
                email: getUser.data.Success.email,
                role: getUser.data.Success.role,
            };

            setUser(userData);
        } catch (error) {
            if (error.response && error.response.status === 401) {  
                localStorage.removeItem("token");
                window.location.reload();
                return <Navigate to="/login" />;
            }
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!token || user?.role === 'member') {
        return <Navigate to="/login" />;
    } else {
        return children;
    }
};
export default PrivateRoute;
