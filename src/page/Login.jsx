import { useState } from 'react';
import { login } from '../hooks/useEstado';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!account || !password) {
      Swal.fire({
        icon: 'error',
        title: 'Datos incorrectos!',
        text: 'Por favor, completa todos los campos',
      });
      return;
    }

    try {
      setLoading(true);
      const data = await login(account, password);
      console.log('Respuesta de inicio de sesión:', data);

      // Si el inicio de sesión es exitoso, redirigir a la página del banco
      if (data && data.token) {
        navigate('/bank'); 
      }
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contenedor-login">
      <div className="contenedor-form">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            placeholder="account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Iniciar Sesión" disabled={loading} />
          {loading && <p>Cargando...</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
