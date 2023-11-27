import './login.css';
import { useContext, useState } from 'react';
import { login } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import imgBanco from "../assets/image-banco.jpg"
import Swal from 'sweetalert2';

const Login = () => {
  const { setDataStorage } = useContext(DataContext);

  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(account, password);

      if (data.msg === 'Login exitoso!') {
        Swal.fire({
          icon: 'success',
          title: data.msg,
        })
        setDataStorage(data);
        localStorage.setItem('dataLogged', JSON.stringify(data));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Datos incorrectos!',
          text: data.msg,
        })
      }

      // Si el inicio de sesión es exitoso, redirigir a la página del banco
      if (data && data.token) {
        navigate('/cuenta/info');
      }

    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="contenedor-login">
      <div className="contenedor-form">
        <form className="form" onSubmit={handleSubmit}>
          <div className="header">Iniciar Sesión</div>
          <div className="inputs">
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
            <button className="sigin-btn">Submit</button>
            {error && (
              Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos!',
                text: 'Por favor, completa todos los campos',
              }))}
          </div>
        </form>
      </div>
      <div className='img-banco'>
        <img src={imgBanco} alt="banco" />
      </div>
    </div>
  );
};

export default Login;
