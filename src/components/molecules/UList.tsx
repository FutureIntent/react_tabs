import styled from "styled-components";

const UListContainer = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
`;

const UList = ({children}: {children: React.ReactNode}) => {

    return(
        <UListContainer>
            {children}
        </UListContainer>        
    );
}

export default UList;