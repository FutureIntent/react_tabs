import { Link, LinkProps } from "react-router-dom";
import { styled } from "styled-components";

interface IconLinkInterface extends LinkProps {
    children: JSX.Element
}

const StyledLink = styled(Link)`
color: var(--primary);
margin: 5px;
transition: color 0.2s linear;

&:hover {
    color: var(--primary-dark);
}
`;

const IconLink = ({children, ...rest}: IconLinkInterface) => {

    return(
        <StyledLink {...rest}>
            {children}
        </StyledLink>
    );
}

export default IconLink;