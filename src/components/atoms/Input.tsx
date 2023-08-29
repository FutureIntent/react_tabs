import { TextField, TextFieldProps, styled } from "@mui/material";


const MUIInput = styled(TextField)<TextFieldProps>(() => ({
    width: '100%',
    margin: '5px',
    background: 'white'
}));

export default MUIInput;