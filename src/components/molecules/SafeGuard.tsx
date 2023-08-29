import { styled as MUIStyled, IconButton, IconButtonProps } from "@mui/material";
import { styled } from "styled-components";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface SafeGuardInterface {
    show: boolean,
    children: React.ReactNode,
    accept: () => void,
    decline: () => void
}

const SafeGuardContainer = styled.div`
position: relative;
`;

const CustomIconButton = MUIStyled(IconButton)<IconButtonProps>(() => ({
    position: 'absolute',
    left: 'calc(100% + 5px)',
    borderRadius: '0',
    color: 'white',
    padding: '2px',
    top: '25%'
}));

const SafeGuard = ({show, children, accept, decline}: SafeGuardInterface) => {

    return(
        <SafeGuardContainer>
            {children}    
            {show && 
                <>
                    <CustomIconButton 
                        sx={{
                            transform: 'translateY(calc(-50% - 2.5px))', 
                            backgroundColor: 'var(--accept)', 
                            '&:hover': {
                                backgroundColor: 'var(--accept-dark)'
                            }
                        }} 
                        onClick={accept}
                    >
                        <CheckRoundedIcon fontSize="small" />
                    </CustomIconButton>

                    <CustomIconButton 
                        sx={{
                            transform: 'translateY(calc(50% + 2.5px))', 
                            backgroundColor: 'var(--decline)',
                            '&:hover': {
                                backgroundColor: 'var(--decline-dark)'
                            }
                        }} 
                        onClick={decline}
                    >
                        <CloseRoundedIcon fontSize="small" />
                    </CustomIconButton>
                </>
            }
        </SafeGuardContainer>
    );
}

export default SafeGuard;