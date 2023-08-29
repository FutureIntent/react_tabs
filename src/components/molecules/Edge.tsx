import { useLayoutEffect, useState } from "react";
import { Tab } from "../../hooks/useTabs";
import Node from './../atoms/Node';
import { filterChildren } from "../../functions/tabs/tabsFunc";
import UList from "./UList";
import List from "../atoms/List";

interface EdgeInterface {
    node: Tab,
    tree: Tab[],
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    level: number
}

const Edge = ({ node, tree, setTabs, level }: EdgeInterface) => {

    const [children, setChildren] = useState<Tab[]>([]);
    const [depth, setDepth] = useState<number>(0);
    const [showChildren, setShowChildren] = useState<boolean>(true);

    useLayoutEffect(() => {
        setDepth(level);
        filterChildren(node, tree, setChildren);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <UList>
            <Node node={node} setTabs={setTabs} level={depth} setShowChildren={setShowChildren} hasChildren={children.length > 0 ? true : false} showChildren={showChildren} />
            {
                children.map((child) => <List key={child.id} expanded={showChildren}>
                    <Edge node={child} setTabs={setTabs} tree={tree} level={depth + 1} />
                </List>)
            }
        </UList>
    );
}

export default Edge;