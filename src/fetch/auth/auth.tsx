import { UseFormClearErrors, UseFormSetError } from 'react-hook-form';
import axiosInstance from '../../configs/axiosConfig';
import { InputInterface } from '../../pages/Login';

export interface AuthInterface {
    email: string,
    password: string
}

export const auth = ({email, password}: AuthInterface, setError: UseFormSetError<InputInterface>, clearErrors: UseFormClearErrors<InputInterface>) => {
    
    axiosInstance.post('/login', {
        email: email,
        password: password
    })
    .then((res) => {
        if(res.status === 200) {
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
    });
}