import { motion } from "framer-motion";
import styled from "styled-components";
import { accordionVariants } from "../../animations/accordionAnimation";

const ListContainer = styled.li`
overflow: visible;
margin: 25px 100px 0;
`;

const List = ({expanded, children}: {expanded?: boolean, children: React.ReactNode}) => {
    return(
        <ListContainer as={motion.li} variants={accordionVariants} initial='open' animate={expanded ? 'open' : 'close'}>
            {children}
        </ListContainer>
    );
}

export default List;