import axiosInstance from './../../configs/axiosConfig';

export const user = ({dispatch}: {dispatch: React.Dispatch<any>}) => {
    
    axiosInstance.get('/api/user')
    .then((res) => {
        if(res.status === 200) return dispatch({
            type: 'authenticate',
            payload: {
                id: res.data.id,
                email: res.data.email
            }
        });

        return dispatch({
            type: 'logout'
        });

    })
    .catch(() => {})
}