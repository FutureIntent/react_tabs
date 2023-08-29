import { useContext, useEffect } from "react";
import { AuthContext, AuthInterface } from "../contexts/AuthContext";

const useRedirect = () => {

    const {state}: {state: AuthInterface} = useContext(AuthContext);

    useEffect(() => {
        if(state.authenticated) window.location.replace('/');
    });
}

export default useRedirect;