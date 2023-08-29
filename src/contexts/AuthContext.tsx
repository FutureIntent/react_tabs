import { ReactNode, createContext, useReducer } from "react";

export interface AuthInterface {
    authenticated: boolean,
    id: number | null
    email: string
}

const initialAuthState: AuthInterface = {
    authenticated: false,
    id: null,
    email: ''
}; 

export const AuthContext: any = createContext(initialAuthState);

const authReducer = (state: AuthInterface, action: any) => {
    switch (action.type) {

        case 'authenticate':
            return {
                authenticated: true,
                id: action.payload.id as number,
                email: action.payload.email as string
            };

        case 'logout':
            return {
                authenticated: false,
                id: null,
                email: ''
            };

        default:
            throw new Error();
    }
}

const AuthContextProvider = ({children}: {children: ReactNode}) => {

    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{state, dispatch}}>        
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;