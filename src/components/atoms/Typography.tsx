import { Typography, TypographyProps, styled } from "@mui/material";

const MUITypography = styled(Typography)<TypographyProps>(() => ({
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}));

export default MUITypography;