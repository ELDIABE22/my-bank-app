import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function ProtectedRoute() {
    const { dataStorage } = useContext(DataContext);

    if (dataStorage.msg !== 'Login exitoso!') {
        return <Navigate to='/inicio-sesion' />
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoute