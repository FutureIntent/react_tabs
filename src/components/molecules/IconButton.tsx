import { IconButton, IconButtonProps, styled } from "@mui/material";
import React from "react";

interface MUIconButtonInterface extends IconButtonProps {
    children: React.ReactNode
}

type RefType = ((instance: HTMLButtonElement | null) => void) | React.RefObject<HTMLButtonElement> | null | undefined;

const MUIconContainer = styled(IconButton)<MUIconButtonInterface>(() => ({

}));

const MUIconButton = React.forwardRef(({children, ...rest}: MUIconButtonInterface, ref: RefType) => {

    return(
        <MUIconContainer ref={ref} {...rest}>
            {children}
        </MUIconContainer>
    );
})

export default MUIconButton;