import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="contenedor-home">
        <div className="contenedor-bienvenida">
            <h1>Bienvenido a tu Banco!</h1>
            <Link to='/login'>
                <button>Ingresar</button>
            </Link>
        </div>
    </div>
  )
}

export default Home