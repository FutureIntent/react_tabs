import styled from "styled-components";
import useRedirect from "../hooks/useRedirect";
import { useForm } from "react-hook-form";
import { submitRegistration } from "../functions/register/registerFunc";
import Form from "../components/molecules/Form";
import MUIInput from "../components/atoms/Input";
import WrappedAlert from "../components/molecules/AlertWrapper";
import MUIAlert from "../components/atoms/Alert";
import { whitespace } from "../helpers/text";
import background from './../assets/register.jpg';
import PageAnimation from "../animations/pageAnimation";

export interface InputInterface {
    email: string,
    name: string,
    password: string,
    password_confirmation: string
}

const RegistrationContainer = styled.div`
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

const Registration = () => {

    useRedirect();

    // useEffect(() => {
    //     register({
    //         email: 'zxcvb@gmail.com',
    //         name: 'Future',
    //         password: 'zxc12345',
    //         password_confirmation: 'zxc12345'
    //     });
    // }, []);

    const {
        register,
        handleSubmit,
        setError,
        getValues,
        clearErrors,
        formState: { errors },
      } = useForm<InputInterface>({
        defaultValues: {
            email: '',
            name: '',
            password: '',
            password_confirmation: ''
        }
      });

    return (
        <PageAnimation>
            <RegistrationContainer>
                <Form onSubmit={handleSubmit((data) => submitRegistration(data, setError, clearErrors))} errors={errors} style={{
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
    
                    <MUIInput label="name" variant="filled" type="text" sx={{margin: '10px'}} {...register("name", { 
                            required: "This field is required", 
                            minLength: {
                                value: 2,
                                message: 'Minimum length is 2 symbols'
                            },
                            pattern: {
                                value: /^[A-Z, a-z, 0-9]*$/,
                                message: 'Only letters and numbers are allowed'
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
                        errors.name as JSX.Element && 
                        <WrappedAlert>
                                <MUIAlert severity="error">
                                    {errors.name?.message}
                            </MUIAlert>
                        </WrappedAlert>     
                    }
    
                    <MUIInput label="password" variant="filled" type="password" sx={{margin: '10px'}} {...register("password", { 
                            required: "This field is required", 
                            minLength: {
                                value: 8,
                                message: 'Minimum length is 8 symbols'
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
        
                    <MUIInput label="password confirmation" variant="filled" type="password" sx={{margin: '10px'}} {...register("password_confirmation", { 
                            required: "This field is required", 
                            minLength: {
                                value: 8,
                                message: 'Minimum length is 8 symbols'
                            },
                            maxLength: {
                                value: 100,
                                message: 'Max length is 100 symbols'
                            },
                            validate: {
                                match: v => v === getValues('password') || 'Passwords do not match',
                                ...whitespace
                            }
                        })} 
                    />
                    {
                        errors.password_confirmation as JSX.Element && 
                        <WrappedAlert>
                                <MUIAlert severity="error">
                                    {errors.password_confirmation?.message}
                            </MUIAlert>
                        </WrappedAlert>     
                    }               
    
                </Form>
            </RegistrationContainer>
        </PageAnimation>
    );
};

export default Registration;