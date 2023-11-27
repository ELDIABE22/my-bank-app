/* eslint-disable react/prop-types */
import './cardsMovimientos.css';

// eslint-disable-next-line react/prop-types
const CardsMovimientos = ({ item }) => {
    return (
        <div className="card">
            <div className="pricing-block-content">
                <p className="pricing-plan">Movimiento {item.id}</p>
                <div className="pricing-note">Monto</div>
                <div className="price-value" data-currency="$ USD" data-currency-simple="USD">
                    <p className="price-number">$<span className="price-integer">{item.amount}</span></p>
                </div>
                <ul className="check-list" role="list">
                    <li className="check-list-item">
                        <svg
                            version="1.0"
                            preserveAspectRatio="xMidYMid meet"
                            height="16"
                            viewBox="0 0 30 30.000001"
                            zoomAndPan="magnify"
                            width="16"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(102, 78, 255)" }}
                        >
                            <defs>
                                <clipPath id="id1">
                                    <path
                                        fill="#664eff"
                                        clipRule="nonzero"
                                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                                    ></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                                <path
                                    fillRule="nonzero"
                                    fillOpacity="1"
                                    d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                                    fill="#664eff"
                                ></path>
                            </g>
                        </svg>
                        De: {item.id_user_send}
                    </li>
                    <li className="check-list-item">
                        <svg
                            version="1.0"
                            preserveAspectRatio="xMidYMid meet"
                            height="16"
                            viewBox="0 0 30 30.000001"
                            zoomAndPan="magnify"
                            width="16"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(102, 78, 255)" }}
                        >
                            <defs>
                                <clipPath id="id1">
                                    <path
                                        fill="#664eff"
                                        clipRule="nonzero"
                                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                                    ></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                                <path
                                    fillRule="nonzero"
                                    fillOpacity="1"
                                    d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                                    fill="#664eff"
                                ></path>
                            </g>
                        </svg>
                        Para: {item.id_user_recive}
                    </li>
                    <li className="check-list-item">
                        <svg
                            version="1.0"
                            preserveAspectRatio="xMidYMid meet"
                            height="16"
                            viewBox="0 0 30 30.000001"
                            zoomAndPan="magnify"
                            width="16"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(102, 78, 255)" }}
                        >
                            <defs>
                                <clipPath id="id1">
                                    <path
                                        fill="#664eff"
                                        clipRule="nonzero"
                                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                                    ></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                                <path
                                    fillRule="nonzero"
                                    fillOpacity="1"
                                    d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                                    fill="#664eff"
                                ></path>
                            </g>
                        </svg>
                        Hora envio: {item.createdAt}
                    </li>
                    <li className="check-list-item">
                        <svg
                            version="1.0"
                            preserveAspectRatio="xMidYMid meet"
                            height="16"
                            viewBox="0 0 30 30.000001"
                            zoomAndPan="magnify"
                            width="16"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "rgb(102, 78, 255)" }}
                        >
                            <defs>
                                <clipPath id="id1">
                                    <path
                                        fill="#664eff"
                                        clipRule="nonzero"
                                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656"
                                    ></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#id1)">
                                <path
                                    fillRule="nonzero"
                                    fillOpacity="1"
                                    d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125"
                                    fill="#664eff"
                                ></path>
                            </g>
                        </svg>
                        Hora recibido: {item.updatedAt}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardsMovimientos