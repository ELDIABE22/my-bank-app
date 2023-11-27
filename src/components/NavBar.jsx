import './navBar.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getMovementsById, createMovement } from '../hooks/useApi';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const NavBar = () => {
    // Contexto de datos utilizado para acceder y modificar la información del usuario.
    const { setDataStorageMovimientos, dataStorage } = useContext(DataContext);

    // Hook de navegación de React Router.
    const navigate = useNavigate();

    // Función que maneja el clic en el botón "Info Cuenta".
    const handleInfoButtonClick = () => {
        navigate('/cuenta/info');
    };

    // Función que maneja el clic en el botón "Movimientos".
    const handleMovimientosButtonClick = () => {
        // Diálogo de entrada para solicitar la identificación del usuario.
        Swal.fire({
            title: "Ingresa tu identificación",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Enviar",
            showLoaderOnConfirm: true,
            preConfirm: async (userId) => {
                try {
                    // Verifica si la identificación coincide con la del usuario.
                    if (userId !== dataStorage.user.account) {
                        return Swal.showValidationMessage('La identificación no coincide!');
                    }

                    // Obtiene los movimientos del usuario por su identificación.
                    const data = await getMovementsById(userId);

                    // Maneja diferentes mensajes de error o éxito.
                    if (data.msg === 'Usuario no encontrado') {
                        return Swal.showValidationMessage(data.msg);
                    } else if (data.msg === 'Error interno') {
                        return Swal.showValidationMessage(data.msg);
                    } else {
                        setDataStorageMovimientos(data);
                        localStorage.setItem('dataLoggedMovimientos', JSON.stringify(data));
                        navigate('/cuenta/movimientos');
                    }
                } catch (error) {
                    Swal.showValidationMessage(`
                        Request failed: ${error}
                    `);
                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Identificación valida!',
                    icon: "success"
                });
            }
        });
    };

    // Función que maneja el clic en el botón "Transferencia".
    function handleTransferenciaButtonClick() {
        let data;

        // Diálogo de entrada para solicitar la información de la transferencia.
        Swal.fire({
            title: 'Ingresa tu información',
            html: `
                <input required class="swal2-input cuenta" placeholder="Cuenta a recibir" > 
                <input required class="swal2-input monto" placeholder="Monto" >
            `,
            showCancelButton: true,
            confirmButtonText: "Enviar",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                const cuenta = document.querySelector(".cuenta").value;
                const monto = document.querySelector(".monto").value;

                try {
                    // Crea un nuevo movimiento de transferencia en la cuenta del usuario.
                    data = await createMovement(parseInt(monto), cuenta, dataStorage);

                    // Maneja diferentes mensajes de error o éxito.
                    if (data.msg !== 'Envio realizado') {
                        return Swal.showValidationMessage(data.msg);
                    } else {
                        dataStorage.user.money = data.new_money;
                        setDataStorageMovimientos(dataStorage);
                        localStorage.setItem('dataLogged', JSON.stringify(dataStorage));
                    }
                } catch (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: data.msg,
                    icon: "success",
                });
            }
        });
    }

    // Función que maneja el clic en el botón "Cerrar sesión".
    const onLogout = () => {
        // Diálogo de confirmación para cerrar sesión.
        Swal.fire({
            icon: "question",
            title: "¿Seguro que quieres cerrar sesión?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                // Diálogo de éxito al cerrar sesión.
                Swal.fire({
                    title: "Sesion Cerrada!",
                    icon: "success"
                });

                // Elimina la información del usuario almacenada y redirige a la página de inicio.
                localStorage.removeItem('dataLogged');
                navigate('/', { replace: true });
            }
        });
    }

    // Renderiza la barra de navegación con botones de diferentes secciones.
    return (
        <div className="contenedor-navbar">
            <nav>
                {/* Botón "Info Cuenta" */}
                <button className='boton-nav boton-info' onClick={handleInfoButtonClick}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Info Cuenta</span>
                </button>

                {/* Botón "Movimientos" */}
                <button className='boton-nav boton-movimientos' onClick={handleMovimientosButtonClick}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Movimientos</span>
                </button>

                {/* Botón "Transferencia" */}
                <button className='boton-nav boton-transferencia' onClick={handleTransferenciaButtonClick}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Transferencia</span>
                </button>

                {/* Botón "Cerrar sesión" */}
                <button className='boton-nav boton-salir' onClick={onLogout}>
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                        </div>
                    </div>
                    <span>Cerrar sesión</span>
                </button>
            </nav>
        </div>
    )
}

export default NavBar;
