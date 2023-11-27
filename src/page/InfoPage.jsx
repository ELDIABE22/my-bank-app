import { useContext } from 'react';
import './infoPage.css';
import { DataContext } from '../context/DataContext';

const InfoPage = () => {
    const { dataStorage } = useContext(DataContext);
    
    return (
        <div className="contenedor-infoPage">
            <div className='contenedor-fondos'>
                <div className='fondos'>Fondo: ${dataStorage.user.money}</div>
            </div>
            <div className='contenedor-info-box'>
                <h2>Info Cuenta</h2>
                <div className='info-box'>
                    <p><strong>Account</strong>: {dataStorage.user.account}</p>
                    <p><strong>Nombre</strong>: {dataStorage.user.name}</p>
                    <p><strong>Token</strong>: {dataStorage.token}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoPage