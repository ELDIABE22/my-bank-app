import './home.css';
import imgBanco from "../assets/image-banco.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="contenedor-home">
        <div className="contenedor-bienvenida">
            <h1>Bienvenido a tu Banco!</h1>
            <Link to='/inicio-sesion'>
                <button className='boton-ingresar'>Ingresar</button>
            </Link>
        </div>
        <div className='img-banco'>
          <img src={imgBanco} alt="banco" />
        </div>
    </div>
  )
}

export default Home