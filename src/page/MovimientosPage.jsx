import './movimientosPage.css';
import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import CardsMovimientos from '../components/CardsMovimientos';

const MovimientosPage = () => {
    // Contexto de datos utilizado para acceder a la información de los movimientos.
    const { dataStorageMovimientos } = useContext(DataContext);

    return (
        <div className="contenedor-movimientos">
            <h1 className='title'>Movimientos</h1>

            {/* Contenedor de las tarjetas de movimientos. */}
            <div className='contenedor-movimientos-cards'>
                {dataStorageMovimientos.length > 0 ?
                    // Mapeo de los movimientos para renderizar las tarjetas.
                    dataStorageMovimientos.map(item => (
                        <CardsMovimientos item={item} key={item.id} />
                    ))
                    :
                    (
                        // Mensaje si el usuario no tiene movimientos.
                        <p className="movimientos-not">No tienes movimientos.</p>
                    )
                }
            </div>
        </div>
    )
}

export default MovimientosPage