import { useRef, useState } from "react";
import { Tab } from "../../hooks/useTabs";
import MUIPaper from "./Paper";
import MUIInput from "./Input";
import { InputProps, PaperProps, styled } from "@mui/material";
import {styled as SCStyled} from 'styled-components';
import MUITypography from "./Typography";
import useVolumicHover from "../../hooks/useVolumicHover";
import MUIconButton from "../molecules/IconButton";
import UnfoldLessRoundedIcon from '@mui/icons-material/UnfoldLessRounded';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import { addChildNode, handleInput, hideSafeGuard, removeNode, showSafeGuard, toggleTabFolding, updateNode } from "../../functions/tabs/tabsFunc";
import SafeGuard from "../molecules/SafeGuard";
import MUITooltip from "./Tooltip";
import { MediaQueries } from "../../styles/mediaQueries";

interface NodeInterface {
    node: Tab,
    setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,
    level: number,
    hasChildren?: boolean,
    showChildren?: boolean,
    setShowChildren?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface GuardInterface {
    child: boolean,
    update: boolean,
    delete: boolean
}

export interface InputInterface {
    header: string,
    content: string
}

const CustomInput = styled(MUIInput)<InputProps>(() => ({
    margin: '0',
    marginBottom: '10px',
    background: 'none'
}));

const NodeContainer = SCStyled.div`
width: fit-content;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const VolumicWrapper = SCStyled.div`
perspective: 2000px;
width: fit-content;
`;

const IconWrapper = SCStyled.div`
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

const CustomPaper = styled(MUIPaper)<PaperProps>(() => ({
    width: '500px',
    [`${MediaQueries.lg}`]: {
        width: '450px'
    },
    [`${MediaQueries.md}`]: {
        width: '400px'
    },
    [`${MediaQueries.sm}`]: {
        width: '350px'
    },
    [`${MediaQueries.xs}`]: {
        width: '300px'
    }
}));

const initialGuard: GuardInterface = {
    child: false,
    update: false,
    delete: false
}

const Node = ({ node, setTabs, level, hasChildren, showChildren, setShowChildren }: NodeInterface) => {

    const volumicWrapperRef = useRef<HTMLDivElement>(null);
    const paperRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState<GuardInterface>(initialGuard);

    const [input, setInput] = useState<InputInterface>({
        header: node.header,
        content: node.content
    });

    useVolumicHover(volumicWrapperRef, paperRef);

    return(
        <NodeContainer>

            <VolumicWrapper ref={volumicWrapperRef}>
                <CustomPaper ref={paperRef}>
                    <MUITypography variant="caption" sx={{marginBottom: '5px'}}>Depth: {level}</MUITypography>
                    <CustomInput name='header' label="Header" variant="outlined" type="text" multiline rows={1} value={input.header} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event, setInput)} />
                    <CustomInput name='content' label="Content" variant="outlined" type="text" multiline rows={2} value={input.content} onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event, setInput)} />
                </CustomPaper>
            </VolumicWrapper>

            <IconWrapper>
                <SafeGuard show={show.child ? true : false} accept={() => addChildNode(setTabs, node.id)} decline={() => hideSafeGuard(setShow, initialGuard)}>
                    <MUITooltip title='Add Child' placement="left" arrow>
                        <MUIconButton sx={{color: show.child ? 'var(--selected)' : 'white'}} aria-label="Add Child" onClick={() => showSafeGuard(setShow, 'child', initialGuard)}>
                            <LibraryAddRoundedIcon fontSize="medium" />
                        </MUIconButton>
                    </MUITooltip>
                </SafeGuard>

                <SafeGuard show={show.update ? true : false} accept={() => updateNode(setTabs, node.id, input, () => hideSafeGuard(setShow, initialGuard))} decline={() => hideSafeGuard(setShow, initialGuard)}>
                    <MUITooltip title='Update Node' placement="left" arrow>
                        <MUIconButton sx={{color: show.update ? 'var(--selected)' : 'white'}} aria-label="Update Node" onClick={() => showSafeGuard(setShow, 'update', initialGuard)}>
                            <RefreshRoundedIcon fontSize="medium" />
                        </MUIconButton>
                    </MUITooltip>
                </SafeGuard>

                <SafeGuard show={show.delete ? true : false} accept={() => removeNode(setTabs, node.id)} decline={() => hideSafeGuard(setShow, initialGuard)}>
                    <MUITooltip title='Delete Node' placement="left" arrow>
                        <MUIconButton sx={{color: show.delete ? 'var(--selected)' : 'white'}} aria-label="Delete Node" onClick={() => showSafeGuard(setShow, 'delete', initialGuard)}>
                            <DeleteRoundedIcon fontSize="medium" />
                        </MUIconButton>
                    </MUITooltip>
                </SafeGuard>

                {
                    hasChildren && <MUITooltip title={showChildren ? 'Collapse' : 'Expand'} placement="left" arrow>
                        <MUIconButton sx={{color: 'white'}} aria-label="Collapse/Expand" onClick={() => toggleTabFolding(setShowChildren)}>
                            {showChildren
                                ? <UnfoldLessRoundedIcon fontSize="large" />
                                : <UnfoldMoreRoundedIcon fontSize="large" />
                            }
                        </MUIconButton>
                    </MUITooltip>
                }
            </IconWrapper>

        </NodeContainer>
    );
}

export default Node;