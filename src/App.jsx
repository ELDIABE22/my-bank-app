import { Route, Routes } from 'react-router-dom';
import Login from './page/login';
import './App.css';
import Home from './page/Home';
import Bank from './page/Bank';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/bank" element={<Bank />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
