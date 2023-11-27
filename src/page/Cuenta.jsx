import NavBar from '../components/NavBar'
import InfoPage from './InfoPage'
import MovimientosPage from './MovimientosPage';
import './cuenta.css'

const Cuenta = () => {
  // Verifica la ruta actual para determinar qué componente mostrar.
  const esEnInfo = location.pathname === '/cuenta/info';
  const esEnMovimientos = location.pathname === '/cuenta/movimientos';

  return (
    <div className='contenedor-cuenta'>
      {/* Barra de navegación de la sección de cuenta. */}
      <NavBar />

      {/* Contenedor principal de la sección de cuenta. */}
      <main className='contenedor-main'>
        {/* Muestra InfoPage si la ruta actual es '/cuenta/info'. */}
        {esEnInfo && (<InfoPage />)}

        {/* Muestra MovimientosPage si la ruta actual es '/cuenta/movimientos'. */}
        {esEnMovimientos && (<MovimientosPage />)}
      </main>
    </div>
  )
}

export default Cuenta