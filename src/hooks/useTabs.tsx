import { useEffect } from "react";
import { AuthInterface } from "../contexts/AuthContext";
import { tabs } from "../fetch/tabs/tabs";

export interface Tab {
    id: number,
    header: string,
    content: string,
    parent_id: number | null,
    user_id: number,
    created_at: Date,
    updated_at: Date
}

const useTabs = (state: AuthInterface, setTabs: React.Dispatch<React.SetStateAction<Tab[]>>) => {

    useEffect(() => {
        state.authenticated && tabs({ setTabs });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
    
}

export default useTabs;