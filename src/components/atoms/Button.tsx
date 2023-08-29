import { styled } from "@mui/material";
import Button, { ButtonProps } from '@mui/material/Button';

const MUIButton = styled(Button)<ButtonProps>(() => ({
    margin: '5px'
}));

export default MUIButton;