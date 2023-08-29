import { styled } from "styled-components";
import { MediaQueries } from "../../styles/mediaQueries";
import MUIButton from "../atoms/Button";
import MUIAlert from "../atoms/Alert";
import WrappedAlert from "./AlertWrapper";
import { FieldErrors } from "react-hook-form";

interface FormInterface {
    onSubmit?: (event: React.ChangeEvent<HTMLInputElement>) => void, 
    errors: FieldErrors<any>, 
    children: JSX.Element [], 
    style?: React.CSSProperties
}

const FormContainer = styled.form<{formstyle?: React.CSSProperties}>`
width: 40%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(0, 0, 0, 0.1);
-webkit-backdrop-filter: blur(5px);
backdrop-filter: blur(5px);
padding: 20px;
max-width: 550px;
${({formstyle}) => ({...formstyle})}

${MediaQueries.lg} {
    width: 50%;
}
${MediaQueries.md} {
    width: 60%;
}
${MediaQueries.sm} {
    width: 70%;
}
${MediaQueries.xs} {
    width: 80%;
}
`;

const Form = ({onSubmit, errors, children, style}: FormInterface) => {

    return (
        <FormContainer onSubmit={onSubmit as unknown as React.FormEventHandler<HTMLFormElement>} formstyle={style}>

            {children}

            {
            errors.root && 
            <WrappedAlert>
                <MUIAlert severity="error">
                    {errors.root?.message as string}
                </MUIAlert>
            </WrappedAlert>
            }

            <MUIButton variant="contained" sx={{margin: '10px'}} type="submit">
                Submit
            </MUIButton>

        </FormContainer>
    );
}

export default Form;