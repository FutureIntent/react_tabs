import styled from "styled-components";
import PageAnimation from "../animations/pageAnimation";
import background from './../assets/index.jpg';

const IndexContainer = styled.div`
width: 100%;
min-height: calc(100vh - var(--header-height));
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;

const Index = () => {

    return (
        <PageAnimation>
            <IndexContainer>

            </IndexContainer>
        </PageAnimation>
    );
};

export default Index;