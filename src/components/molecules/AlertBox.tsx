import styled from "styled-components";
import MUIAlert from "../atoms/Alert";


const Wrapper = styled.div`
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
display: none;
z-index: 3;
`;

const AlertBox = () => {

    return(
        <Wrapper id="alertBox">
            <MUIAlert severity="warning" sx={{whiteSpace: 'nowrap', maxWidth: '70vw'}}>

            </MUIAlert>
        </Wrapper>
    );
}

export default AlertBox;