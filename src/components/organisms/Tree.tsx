import styled from "styled-components";
import { Tab } from "../../hooks/useTabs";
import Edge from "../molecules/Edge";

interface TreeInterface {
    head: Tab,
    tree: Tab[],
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    level: number
}

const TreeContainer = styled.div`
width: fit-content;
padding: 25px 25px 0;
`;

const Tree = ({ head, tree, setTabs, level }: TreeInterface) => {

    return(
        <TreeContainer>
            <Edge node={head} tree={tree} setTabs={setTabs} level={level} />
        </TreeContainer>
    );
}

export default Tree;