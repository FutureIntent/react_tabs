import { GuardInterface, InputInterface } from "../../components/atoms/Node";
import { newTab, removeTab, updateTab } from "../../fetch/tabs/tabs";
import { Tab } from "../../hooks/useTabs";

export const filterHead = (tabs: Tab[], setHead: React.Dispatch<React.SetStateAction<Tab[]>>) => {
    const head: Tab[] = tabs.filter((tab) => tab.parent_id === null);
    setHead(head);
}

export const filterChildren = (node: Tab, tabs: Tab[], setChildren: React.Dispatch<React.SetStateAction<Tab[]>>) => {
    const children: Tab[] = tabs.filter((tab) => tab.parent_id === node.id);
    setChildren(children);
}

export const handleInput = (event: React.ChangeEvent<HTMLInputElement>, setInput: React.Dispatch<React.SetStateAction<InputInterface>>) => {
    const name = event.target?.name;
    const value = event.target?.value;

    setInput((prevState) => ({...prevState, [name]: value}));
}

export const showSafeGuard = (setShow: React.Dispatch<React.SetStateAction<GuardInterface>>, attr: string, initialState: GuardInterface) => {
    setShow({...initialState, [attr]: true});
}

export const hideSafeGuard = (setShow: React.Dispatch<React.SetStateAction<GuardInterface>>, initialState: GuardInterface) => {
    setShow(initialState);
}

export const toggleTabFolding = (setShowChildren: React.Dispatch<React.SetStateAction<boolean>> | undefined) => {
    setShowChildren && setShowChildren((prevState: boolean) => !prevState);
}

export const addParentNode = (setTabs: React.Dispatch<React.SetStateAction<Tab[]>>) => {
    newTab({
        setTabs: setTabs,
        header: 'temporary header', 
        content: 'temporary content', 
        parent_id: null
    });
}

export const addChildNode = (setTabs: React.Dispatch<React.SetStateAction<Tab[]>>, parent_id: number) => {
    newTab({
        setTabs: setTabs,
        header: 'temporary header', 
        content: 'temporary content', 
        parent_id: parent_id
    });
}

export const updateNode = (setTabs: React.Dispatch<React.SetStateAction<Tab[]>>, id: number, input: InputInterface, hideSafeGuard: () => void) => {
    hideSafeGuard();
    updateTab({setTabs, id, input});
}

export const removeNode = (setTabs: React.Dispatch<React.SetStateAction<Tab[]>>, id: number) => {
    removeTab({setTabs, id});
}