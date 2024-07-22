import { useEffect, useState } from 'react';
import { axiosInstance } from '../../lib/axios';

export default function useFetchEvent({ slug }) {
    const [event, setEvent] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchEvent = async () => {
        try {
            const res = await axiosInstance.get(`/getdetailevent/${slug}`);
            const data = res.data.data;
            setEvent(data);
        } catch (error) {
            console.error("Failed to fetch event:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvent();
    }, [slug]);

    return { event, loading };
}
