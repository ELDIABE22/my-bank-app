import './navBar.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getMovementsById, createMovement } from '../hooks/useApi';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const NavBar = () => {
    const { setDataStorageMovimientos } = useContext(DataContext);

    const navigate = useNavigate();

    const handleInfoButtonClick = () => {
        navigate('/cuenta/info');
    };

    const handleMovimientosButtonClick = () => {
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
                    const data = await getMovementsById(userId);
                    if (data.msg === 'Usuario no encontrado') {
                        return Swal.showValidationMessage(data.msg);
                    } else if (data.msg === 'Error interno') {
                        return Swal.showValidationMessage(data.msg);
                    } else {
                        setDataStorageMovimientos(data);
                        localStorage.setItem('dataLoggedMovimientos', JSON.stringify(data));
                        navigate('/cuenta/movimientos');
                    }
                    console.log(data);
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
                    title: `Identifiación valida!`,
                    icon: "success"
                });
            }
        });
    };

    function handleTransferenciaButtonClick() {
        Swal.fire({
            title: 'Ingresa tu información',
            html: `
                <input required class="swal2-input identificacion" placeholder="Identificación" > 
                <input required class="swal2-input token" placeholder="Token" > 
                <input required class="swal2-input cuenta" placeholder="Cuenta a recibir" > 
                <input required class="swal2-input monto" placeholder="Monto" >
            `,
            showCancelButton: true,
            confirmButtonText: "Enviar",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                const identificacion = document.querySelector(".identificacion").value;
                const token = document.querySelector(".token").value;
                const cuenta = document.querySelector(".cuenta").value;
                const monto = document.querySelector(".monto").value;

                try {
                    const data = await createMovement(monto, token, cuenta, identificacion);
                    console.log(data);
                } catch (error) {
                    Swal.showValidationMessage(`Request failed: ${error}`);
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `Transferencia exitosa!`,
                    icon: "success",
                });
            }
        });
    }

    const onLogout = () => {
        Swal.fire({
            icon: "question",
            title: "¿Seguro que quieres cerrar sesión?",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sesion Cerrada!",
                    icon: "success"
                });

                localStorage.removeItem('dataLogged');
                navigate('/', { replace: true });
            }
        });
    }

    return (
        <div className="contenedor-navbar">
            <nav>
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

export default NavBar