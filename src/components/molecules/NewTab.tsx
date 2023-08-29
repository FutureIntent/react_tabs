import styled, { keyframes } from "styled-components";
import { MediaQueries } from "../../styles/mediaQueries";

interface NewTabInterface {
  children: React.ReactNode,
  action: () => void
}

const NewTabContainer = styled.button`
all: unset;
display: inline-flex;
justify-content: center;
align-items: center;
width: 524px;
color: white;
border: 3px dashed white;
border-radius: 4px;
font-size: 3rem;
height: 150px;
margin: 25px 0 25px 25px;
position: relative;
overflow: hidden;
cursor: pointer;
background-color: rgba(255, 255, 255, 0.1);

&:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

&:active {
    background-color: rgba(255, 255, 255, 0.3);
}

${MediaQueries.lg} {
  width: 474px;
}

${MediaQueries.md} {
  width: 424px;
}

${MediaQueries.sm} {
  width: 374px;
}

${MediaQueries.xs} {
  width: 324px;
}
`;


const NewTab = ({children, action}: NewTabInterface) => {

    return(
       <NewTabContainer onClick={action}>
            {children}
        </NewTabContainer>
    );
}

export default NewTab;