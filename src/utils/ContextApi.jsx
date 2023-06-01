import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {


    const [imageSearch, setimageSearch] = useState(false)

    return (

        <Context.Provider value={{
            imageSearch, setimageSearch
        }}>
            {props.children}
        </Context.Provider>
    )
};
