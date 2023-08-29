import { Paper, PaperProps, styled } from "@mui/material";


const MUIPaper = styled(Paper)<PaperProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: '10px 15px',
    backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
}));

export default MUIPaper;