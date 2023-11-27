import { useContext } from 'react';
import './infoPage.css';
import { DataContext } from '../context/DataContext';

const InfoPage = () => {
    // Contexto de datos utilizado para acceder a la información del usuario almacenada.
    const { dataStorage } = useContext(DataContext);

    return (
        <div className="contenedor-infoPage">
            {/* Contenedor de fondos del usuario. */}
            <div className='contenedor-fondos'>
                <div className='fondos'>Fondo: ${dataStorage.user.money}</div>
            </div>

            {/* Contenedor de la información de la cuenta del usuario. */}
            <div className='contenedor-info-box'>
                <h2>Info Cuenta</h2>
                <div className='info-box'>
                    {/* Detalles de la cuenta del usuario. */}
                    <p><strong>Account</strong>: {dataStorage.user.account}</p>
                    <p><strong>Nombre</strong>: {dataStorage.user.name}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage