import { Link } from "react-router-dom";
import styled from "styled-components";
import MUIButton from "../components/atoms/Button";
import HomeIcon from '@mui/icons-material/Home';
import IconLink from "../components/molecules/IconLink";
import TabIcon from '@mui/icons-material/Tab';
import { ThemeProvider } from "@mui/material";
import { loginButtonTheme, logoutButtonTheme } from "../styles/muiThemes";
import { useContext } from "react";
import { AuthContext, AuthInterface } from "../contexts/AuthContext";
import MUITypography from "../components/atoms/Typography";
import { deAuth } from "../fetch/auth/deAuth";
import { copyXalertWarning } from "../functions/header/headerFunc";


const HeaderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
overflow-x: auto;
background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
padding: 5px;
`;

const Header = () => {

    const { state }: {state: AuthInterface} = useContext(AuthContext);

    return (
        <HeaderContainer>

            <Wrapper>
                <IconLink to="/">
                    <HomeIcon fontSize='large' />
                </IconLink>

                {state?.authenticated &&
                    <>
                        <Link to="/tabs">
                            <MUIButton endIcon={<TabIcon />} variant='outlined'>
                                Tabs
                            </MUIButton>
                        </Link>
                        <MUITypography variant="subtitle2" sx={{whiteSpace: 'nowrap', cursor: 'pointer'}} onClick={() => copyXalertWarning('Copied to clipboard!', 2)}>
                            {state?.email}
                        </MUITypography>
                    </>
                }
            </Wrapper>

            <Wrapper>
                {!state?.authenticated &&
                    <>
                        <ThemeProvider theme={loginButtonTheme}>
                            <Link to="/login">
                                <MUIButton variant='contained' color='primary'>
                                    Login
                                </MUIButton>
                            </Link>
                        </ThemeProvider>
                        
                        <Link to="/register">
                            <MUIButton variant='contained'>
                                Register
                            </MUIButton>
                        </Link>
                    </>
                }

                {state?.authenticated &&
                    <ThemeProvider theme={logoutButtonTheme}>
                        <MUIButton variant='contained' color='primary' onClick={deAuth}>
                            Logout
                        </MUIButton>
                    </ThemeProvider>
                }
            </Wrapper>
        
        </HeaderContainer>
    );
};

export default Header;