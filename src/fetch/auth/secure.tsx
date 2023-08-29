import axiosInstance from './../../configs/axiosConfig';

export const secure = ({dispatch}: {dispatch: React.Dispatch<any>}) => {

    axiosInstance.get('/api/user')
    .catch((err) => {
        
        dispatch({
            type: 'logout'
        });

        if(err.response?.status === 401) return window.location.replace('/login');
    })
};