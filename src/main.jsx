import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Componente de enrutamiento proporcionado por react-router-dom.
  <BrowserRouter>
    {/* Proveedor de datos global utilizando el contexto de React. */}
    <DataProvider>
      {/* Componente principal de la aplicación. */}
      <App />
    </DataProvider>
  </BrowserRouter>
)
