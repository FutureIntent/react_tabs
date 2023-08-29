import axiosInstance from '../../configs/axiosConfig';

export const deAuth = () => {

    axiosInstance.post('/logout')
    .then((res) => {
        if(res.status === 204) return window.location.replace('/');
        console.log(res);
    })
    .catch((err) => console.log(err))
}