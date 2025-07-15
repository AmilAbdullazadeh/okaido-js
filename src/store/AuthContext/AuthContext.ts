import { createContext, useContext, useState } from "react";

type User = {
    id: number;
    name: string;
};

type AuthContextType = {
    currentUser: User | null;
    login: () => void;
    logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
    currentUser: null,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    const login = () => {
        setCurrentUser({ id: 1, name: "John Doe" });
    };

    const logout = () => {
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        login,
        logout
    };


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};