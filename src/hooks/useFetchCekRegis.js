import { useState } from 'react';
import { axiosInstance } from '../../lib/axios';

const useCheckAvailability = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);

  const checkAvailability = async (type, value) => {
    setLoading(true);
    setError(null);
    setIsAvailable(null);

    try {
      const endpoint = type === 'username' ? '/user/user' : '/user/pass';
      const response = await axiosInstance.post(endpoint, { [type]: value });
      if (response.status === 200) {
        setIsAvailable(true);
      }
    } catch (error) {
      setIsAvailable(false);
      setError(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { checkAvailability, loading, error, isAvailable };
};

export default useCheckAvailability;
