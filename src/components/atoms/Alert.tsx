import { Alert, AlertProps, styled } from "@mui/material";

const MUIAlert = styled(Alert)<AlertProps>(() => ({
    width: '100%',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
}));

export default MUIAlert;