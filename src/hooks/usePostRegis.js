import { useState } from 'react';
import { axiosInstance } from '../../lib/axios';

const usePostRegis = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postRegis = async (registerData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post('/user/register', registerData);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { postRegis, loading, error, success };
};

export default usePostRegis;

