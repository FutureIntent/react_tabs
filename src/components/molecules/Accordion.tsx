import { motion } from "framer-motion";
import styled from "styled-components";

interface AccordionInterface {
    initialStatus: boolean,
    currentStatus: boolean,
    children: React.ReactNode
}

const initiallyOpened = {
    display: 'block',
    height: 'auto'
}

const initiallyClosed = {
    display: 'none',
    height: '0'
}

const AccordionWrapper = styled.div<{initialStatus: boolean}>`
${({initialStatus}) => (initialStatus ? {...initiallyOpened} : {...initiallyClosed})}
`;

const Accordion = ({initialStatus, currentStatus, children}: AccordionInterface) => {

    return(
        <AccordionWrapper as={motion.div} initialStatus={initialStatus} animate={currentStatus ? 'open' : 'close'}>
            {children}
        </AccordionWrapper>       
    );
}

export default Accordion;