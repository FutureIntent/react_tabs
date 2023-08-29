import { UseFormClearErrors, UseFormSetError } from "react-hook-form";
import { InputInterface } from "../../pages/Registration";
import { register } from "../../fetch/auth/register";

export const submitRegistration = (data: InputInterface, setError: UseFormSetError<InputInterface>, clearErrors: UseFormClearErrors<InputInterface>) => {
    register(
    {
        email: data.email,
        name: data.name,
        password: data.password,
        password_confirmation: data.password_confirmation
    },
    setError,
    clearErrors
    );
}