import { InputInterface } from '../../components/atoms/Node';
import axiosInstance from '../../configs/axiosConfig';
import { alertWarning } from '../../functions/header/headerFunc';
import { Tab } from '../../hooks/useTabs';

interface NewNode {
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    header: string,
    content: string,
    parent_id: number | null
}

interface UpdateNode {
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    id: number,
    input: InputInterface
}

interface RemoveNode {
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    id: number
}

export const tabs = ({setTabs}: {setTabs: React.Dispatch<React.SetStateAction<Tab[]>>}) => {

    axiosInstance.get('api/tabs')
    .then((res) => {
        setTabs(res.data);
    })
    .catch((err) => {
        alertWarning(err.response.data.message, 3);
    })
}

export const newTab = ({setTabs, header, content, parent_id}: NewNode) => {
    axiosInstance.post('api/tabs', {
        header: header,
        content: content,
        parent_id: parent_id
    })
    .then(() => {
        tabs({setTabs});
    })
    .catch((err) => {
        alertWarning(err.response.data.message, 3);
    })
}

export const updateTab = ({setTabs, id, input}: UpdateNode) => {
    axiosInstance.patch(`api/tabs/${id}`, {
       ...input
    })
    .then(() => {
        tabs({setTabs});
    })
    .catch((err) => {
        alertWarning(err.response.data.message, 3);
    })
}

export const removeTab = ({setTabs, id}: RemoveNode) => {
    axiosInstance.delete(`api/tabs/${id}`)
    .then(() => {
        tabs({setTabs});
    })
    .catch((err) => {
        console.log(err);
        alertWarning(err.response.data.message, 3);
    })
}