import styled from "styled-components";

const BackgroundImage = styled.img`
position: absolute;
z-index: 1;
width: 100vw;
height: calc(100vh - var(--header-height));
object-fit: cover;
`;

const AppBackground = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {

    return(
        <BackgroundImage {...props}/>
    );
};

export default AppBackground;