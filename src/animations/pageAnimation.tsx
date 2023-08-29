import { motion } from "framer-motion";
import styled from "styled-components";

const AnimationContainer = styled.div`
overflow: hidden;
position: absolute;
z-index: 2;
width: 100%;
min-height: calc(100vh - var(--header-height));
`;

const page = {
    initial: {
        x: '100vw'
    },
    appear: {
        x: 0
    },
    disappear: {
        x: '-100vw'
    }
};

const PageAnimation = ({children}: {children: React.ReactNode}) => {

    return(
        <AnimationContainer as={motion.div} variants={page}
        initial="initial"
        animate="appear"
        exit="disappear"
        >
            {children}
        </AnimationContainer>
    );
}

export default PageAnimation;