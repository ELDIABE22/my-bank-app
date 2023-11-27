import { Route, Routes } from 'react-router-dom';
import Login from './page/login';
import './App.css';
import Home from './page/Home';
import Cuenta from './page/Cuenta';
import ProtectedRoute from './router/ProtectedRoute';

function App() {
  return (
    <Routes>

      {/* RUTAS PUBLICAS */}
      <Route exact path="/" element={<Home />} />
      <Route path="/inicio-sesion" element={<Login />} />

      {/* RUTAS PROTEGIDAS */}
      <Route element={<ProtectedRoute />}>
        <Route path="/cuenta/info" element={<Cuenta />} />
        <Route path="/cuenta/movimientos" element={<Cuenta />} />
      </Route>

    </Routes>
  );
}

export default App;
