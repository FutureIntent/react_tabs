import { UseFormClearErrors, UseFormSetError } from "react-hook-form";
import { auth } from "../../fetch/auth/auth";
import { InputInterface } from "../../pages/Login";


export const changeLoginInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setInput: React.Dispatch<React.SetStateAction<InputInterface>>) => {
    setInput((prevState) => ({
        ...prevState, [event.target.name]: event.target.value
    }));
}

export const submitLogin = (data: InputInterface, setError: UseFormSetError<InputInterface>, clearErrors: UseFormClearErrors<InputInterface>) => {
    auth(
    {
        email: data.email,
        password: data.password
    },
    setError,
    clearErrors
    );
}