import React, { useState, createContext, useContext, useEffect } from 'react';
import UserJson from '../constant/users.json'
import IUserInterface from '../core/interface/IUserInterface';
import { getItem } from '../core/storage/storage';


// Create the context
const UserContext = createContext<{
    users: IUserInterface[];
    setUsers: React.Dispatch<React.SetStateAction<IUserInterface[]>>;
}>({
    users: [],
    setUsers: () => { }
});

// Create a provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const usersWithCheckbox = UserJson.map((user: IUserInterface) => ({
        ...user,
        isChecked: false
    }));

    const [users, setUsers] = useState<IUserInterface[]>(usersWithCheckbox);
    useEffect(() => {
        const userExist = getItem('users');
        if (userExist) {
            const parsedUsers = JSON.parse(userExist).map((user: IUserInterface) => ({
                ...user,
                isChecked: false 
            }));
            setUsers(parsedUsers);
        }
        else {
            setUsers(usersWithCheckbox);
        }
    }, []);

    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the user context
export const useUsers = () => useContext(UserContext);
