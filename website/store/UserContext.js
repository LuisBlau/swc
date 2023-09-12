import React, { useState, useEffect } from 'react';
import useCheckMobileScreen from "@/utility/useCheckMobileScreen";

const UserContext = React.createContext();

export const UserContextProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const isMobile = useCheckMobileScreen();
    const value = {theme, setTheme, isMobile};
    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export const UserConsumer = UserContext.Consumer;
export default UserContext;
