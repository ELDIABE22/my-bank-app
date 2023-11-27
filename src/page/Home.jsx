import './home.css';
import imgBanco from "../assets/image-banco.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="contenedor-home">
      {/* Contenedor de bienvenida. */}
      <div className="contenedor-bienvenida">
        <h1>Bienvenido a tu Banco!</h1>

        {/* Enlace que redirige a la página de inicio de sesión. */}
        <Link to='/inicio-sesion'>
          <button className='boton-ingresar'>Ingresar</button>
        </Link>
      </div>

      {/* Imagen decorativa del banco. */}
      <div className='img-banco'>
        <img src={imgBanco} alt="banco" />
      </div>
    </div>
  )
}

export default Home