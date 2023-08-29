import { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import { deAuth } from "../fetch/auth/deAuth";

const ErrorContainer = styled.div`
width: 100%;
`;

const Error = () => {



    useEffect(() => {
        
    }, [])

    return (
        <ErrorContainer>
            ERROR
        </ErrorContainer>
    );
};

export default Error;