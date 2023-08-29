import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';
import axiosInstance from './../../configs/axiosConfig';
import { InputInterface } from '../../pages/Registration';

interface RegisterInterface {
    email: string,
    name: string,
    password: string,
    password_confirmation: string
}

export const register = ({email, name, password, password_confirmation}: RegisterInterface, setError: UseFormSetError<InputInterface>, clearErrors: UseFormClearErrors<InputInterface>) => {
    
    axiosInstance.post('/register', {
        email: email,
        name: name,
        password: password,
        password_confirmation: password_confirmation
    })
    .then((res) => {
        if(res.status === 201){
            clearErrors();
            return window.location.replace('/');
        }
        console.log(res);
    })
    .catch((err) => {
        setError('root', {
            type: 'server',
            message: err.response.data.message
        });
        console.log(err);
    })
}