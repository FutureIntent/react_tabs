import { useContext, useEffect } from "react";
import { user } from "../fetch/auth/user";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {

    const {dispatch}: {dispatch: React.Dispatch<any>} = useContext(AuthContext);

    useEffect(() => {
        user({dispatch});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useAuth;