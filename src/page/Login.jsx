import './login.css';
import { useContext, useState } from 'react';
import { login } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import imgBanco from "../assets/image-banco.jpg"
import Swal from 'sweetalert2';

const Login = () => {
  // Contexto de datos utilizado para almacenar la información del usuario autenticado.
  const { setDataStorage } = useContext(DataContext);

  // Estados para manejar la entrada del usuario y mensajes de error.
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hook de navegación de React Router.
  const navigate = useNavigate();

  // Maneja la presentación del formulario y la autenticación del usuario.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Intenta iniciar sesión utilizando la función de API personalizada.
      const data = await login(account, password);

      // Verifica si el inicio de sesión fue exitoso.
      if (data.msg === 'Login exitoso!') {
        // Muestra una notificación de éxito y almacena los datos del usuario.
        Swal.fire({
          icon: 'success',
          title: data.msg,
        })
        setDataStorage(data);
        localStorage.setItem('dataLogged', JSON.stringify(data));
      } else {
        // Muestra una notificación de error si los datos son incorrectos.
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos!',
          text: data.msg,
        })
      }

      // Redirige a la página de información de la cuenta si hay un token en los datos.
      if (data && data.token) {
        navigate('/cuenta/info');
      }

    } catch (error) {
      // Maneja los errores de inicio de sesión.
      console.error('Error de inicio de sesión:', error);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="contenedor-login">
      {/* Contenedor principal que incluye el formulario y la imagen del banco. */}
      <div className="contenedor-form">
        {/* Formulario de inicio de sesión. */}
        <form className="form" onSubmit={handleSubmit}>
          <div className="header">Iniciar Sesión</div>
          <div className="inputs">
            {/* Entradas para el nombre de usuario y la contraseña. */}
            <input
              required
              type="text"
              placeholder="Account"
              className="input"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
            <input
              required
              placeholder="Password"
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Botón para enviar el formulario de inicio de sesión. */}
            <button className="sigin-btn">Submit</button>

            {/* Mensaje de error si los datos son incorrectos. */}
            {error && (
              Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos!',
                text: 'Por favor, completa todos los campos',
              })
            )}
          </div>
        </form>
      </div>

      {/* Imagen decorativa del banco. */}
      <div className='img-banco'>
        <img src={imgBanco} alt="banco" />
      </div>
    </div>
  );
};

export default Login;
