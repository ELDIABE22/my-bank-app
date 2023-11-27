import './movimientosPage.css';
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import CardsMovimientos from '../components/CardsMovimientos';

const MovimientosPage = () => {
    const { dataStorageMovimientos } = useContext(DataContext);

    return (
        <div className="contenedor-movimientos">
            <h1 className='title'>Movimientos</h1>
            <div className='contenedor-movimientos-cards'>
                {dataStorageMovimientos.length > 0 ?
                    dataStorageMovimientos.map(item => (
                        <CardsMovimientos item={item} key={item.id} />
                    ))
                    :
                    (
                        <p className="movimientos-not">No tienes movimientos.</p>
                    )
                }
            </div>
        </div>
    )
}

export default MovimientosPage