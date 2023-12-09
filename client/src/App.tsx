import LandingPage from "./components/LandingPage/LandingPage";
import CarDashboard from "./components/Cars/CarDashboard";
import SearchCar from "./components/Cars/SearchCar";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/Cars/PrivateRoute";
import EditCar from "./components/Cars/components/EditCar";

function App() {
    const location = useLocation();
    return (
        <>
            <Routes location={location.pathname} key={location.key}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cars" element={<SearchCar />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/crud-cars"
                    element={
                        <PrivateRoute>
                            <CarDashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/crud-cars/:id"
                    element={
                        <PrivateRoute>
                            <EditCar />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
