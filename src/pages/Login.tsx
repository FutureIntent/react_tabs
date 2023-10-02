import styled from "styled-components";
import MUIInput from "../components/atoms/Input";
import Form from "../components/molecules/Form";
import { submitLogin } from "../functions/login/loginFunc";
import { useForm } from "react-hook-form";
import WrappedAlert from "../components/molecules/AlertWrapper";
import MUIAlert from "../components/atoms/Alert";
import useRedirect from "../hooks/useRedirect";
import { whitespace } from "../helpers/text";
import background from "./../assets/login.jpg";
import PageAnimation from "../animations/pageAnimation";

export interface InputInterface {
    email: string,
    password: string
}

const LoginContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: calc(100vh - var(--header-height));
min-height: 316px;
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`;


const Login = () => {

    useRedirect();

    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState: { errors },
      } = useForm<InputInterface>({
        defaultValues: {
            email: '',
            password: ''
        }
      });

    // useEffect(() => {

    //     auth({
    //         email: 'IamSoulfuller@gmail.com',
    //         password: 'zxcvbn123'
    //     });

    // }, []);

    return (
        <PageAnimation>
            <LoginContainer>
                <Form onSubmit={handleSubmit((data) => submitLogin(data, setError, clearErrors))} errors={errors} style={{
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    maxHeight: '70%'
                }}>
    
                    <MUIInput label="email" variant="filled" type="text" sx={{margin: '10px'}} {...register("email", { 
                            required: "This field is required", 
                            pattern: {
                                value: /\w{1,}@\w{1,}[.]\w{1,}/,
                                message: 'Invalid email pattern'
                            },
                            maxLength: {
                                value: 100,
                                message: 'Max length is 100 symbols'
                            },
                            validate: {
                                ...whitespace
                            }
                        })} 
                    />
                    {
                        errors.email as JSX.Element && 
                        <WrappedAlert>
                            <MUIAlert severity="error">
                                {errors.email?.message}
                            </MUIAlert>
                        </WrappedAlert>     
                    }
    
                    <MUIInput label="password" variant="filled" type="password" sx={{margin: '10px'}} {...register("password", { 
                            required: "This field is required", 
                            minLength: {
                                value: 8,
                                message: "Require minimum 8 symbols"
                            },
                            maxLength: {
                                value: 100,
                                message: 'Max length is 100 symbols'
                            },
                            validate: {
                                ...whitespace
                            }
                        })} 
                    />
                    {
                        errors.password as JSX.Element && 
                        <WrappedAlert>
                            <MUIAlert severity="error">
                                {errors.password?.message}
                            </MUIAlert>
                        </WrappedAlert>     
                    }
    
                </Form>
            </LoginContainer>
        </PageAnimation>
    );
};

export default Login;