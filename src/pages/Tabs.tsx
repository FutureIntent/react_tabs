import { useContext, useMemo, useState } from "react";
import styled from "styled-components";
import useSecure from "../hooks/useSecure";
import { AuthContext, AuthInterface } from "../contexts/AuthContext";
import PageAnimation from "../animations/pageAnimation";
import useTabs, { Tab } from "../hooks/useTabs";
import { addParentNode, filterHead } from "../functions/tabs/tabsFunc";
import Tree from "../components/organisms/Tree";
import { nanoid } from 'nanoid';
import background from './../assets/tabs.jpg';
import NewTab from "../components/molecules/NewTab";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

const TabsContainer = styled.div`
width: 100%;
height: calc(100vh - var(--header-height));
overflow: auto;
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

const Tabs = () => {

    const { state }: {state: AuthInterface} = useContext(AuthContext);
    
    const [tabs, setTabs] = useState<Tab[]>([]);
    const [head, setHead] = useState<Tab[]>([]);

    useSecure();
    useTabs(state, setTabs);

    useMemo(() => filterHead(tabs, setHead), [tabs]);

    return (
        <PageAnimation>
            <TabsContainer>
                {
                    state.authenticated &&
                    <>
                        {
                           head.map((head) => <Tree head={head} tree={tabs} setTabs={setTabs} level={0} key={nanoid()} />)
                        }
                        <NewTab action={() => addParentNode(setTabs)}>
                            <AddCircleRoundedIcon sx={{fontSize: 'inherit'}} />
                        </NewTab>
                    </>
                }
            </TabsContainer>
        </PageAnimation>
    );
};

export default Tabs;