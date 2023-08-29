import { useContext, useLayoutEffect } from "react";
import { secure } from "../fetch/auth/secure";
import { AuthContext } from "../contexts/AuthContext";

const useProtected = () => {

    const {dispatch}: {dispatch: React.Dispatch<any>} = useContext(AuthContext);

    useLayoutEffect(() => {
        secure({dispatch});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useProtected;