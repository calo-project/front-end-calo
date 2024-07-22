import { useState } from 'react';
import { axiosInstance } from '../../lib/axios';

export default function usePostLogin() {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const postLogin = async (loginObj) => {
        setLoading(true);
        setErrorMessage('');

        try {
            const response = await axiosInstance.post('/user/login', {
                email: loginObj.emailId,
                password: loginObj.password,
            });
            const { data } = response;
            // Simpan token atau lakukan tindakan lain yang diperlukan
            localStorage.setItem('token', data.token);
            setLoading(false);
            return data;
        } catch (error) {
            setLoading(false);
            setErrorMessage(error.response?.data?.message || 'An error occurred');
            throw error;
        }
    };

    return {
        postLogin,
        loading,
        errorMessage,
    };
}
