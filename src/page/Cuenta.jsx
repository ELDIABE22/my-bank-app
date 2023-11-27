import NavBar from '../components/NavBar'
import InfoPage from './InfoPage'
import MovimientosPage from './MovimientosPage';
import './cuenta.css'

const Cuenta = () => {
  const esEnInfo = location.pathname === '/cuenta/info';
  const esEnMovimientos = location.pathname === '/cuenta/movimientos';

  return (
    <div className='contenedor-cuenta'>
      <NavBar />
      <main className='contenedor-main'>
        {esEnInfo && (<InfoPage />)}
        {esEnMovimientos && (<MovimientosPage />)}
      </main>
    </div>
  )
}

export default Cuenta