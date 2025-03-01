import { createContext } from "react";

const AppContext = createContext()

export const AppContextProvider = (props) => {

    const name = 'Naved Ali Khan'
    const value = {
        name,
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )


}

export default AppContext;