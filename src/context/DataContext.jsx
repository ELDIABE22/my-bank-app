import { createContext, useState } from 'react';

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
    // Estados para almacenar y gestionar datos globales.
    const [dataStorage, setDataStorage] = useState(JSON.parse(localStorage.getItem('dataLogged')) || []);
    const [dataStorageMovimientos, setDataStorageMovimientos] = useState(JSON.parse(localStorage.getItem('dataLoggedMovimientos')) || []);

    return (
        <DataContext.Provider value={{ dataStorage, dataStorageMovimientos, setDataStorage, setDataStorageMovimientos }}>
            { children }
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider };
