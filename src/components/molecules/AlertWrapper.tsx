import styled from "styled-components";

const AlertWrapper = styled.div`
width: 100%;
margin: 5px;
display: flex;
justify-content: flex-start;
`;


const WrappedAlert = ({children}: {children: JSX.Element}) => (
    <AlertWrapper>
        {children}
    </AlertWrapper>
);


export default WrappedAlert;