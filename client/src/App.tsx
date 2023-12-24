import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import CarDashboard from './components/Cars/CarDashboard'
import SearchCar from './components/Cars/SearchCar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/Cars/PrivateRoute'
import EditCar from './components/Cars/components/EditCar'

function App (): JSX.Element {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <Routes location={location.pathname} key={location.key}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/cars" element={<SearchCar />} />
                <Route path="/login" element={<Login navigate={navigate} />} />
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
                            {/* // eslint-disable-next-line
                            @typescript-eslint/ban-ts-comment //
                            @ts-expect-error */}
                            <EditCar />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    )
}

export default App
