import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

function ProtectedRoute() {
    // Contexto de datos utilizado para verificar el estado de autenticación.
    const { dataStorage } = useContext(DataContext);

    // Verifica si el mensaje de almacenamiento de datos indica un "Login exitoso".
    if (dataStorage.msg !== 'Login exitoso!') {
        // Redirige a la página de inicio de sesión si el usuario no está autenticado.
        return <Navigate to='/inicio-sesion' />;
    }

    // Renderiza el Outlet para mostrar las subrutas si el usuario está autenticado.
    return (
        <Outlet />
    );
}

export default ProtectedRoute