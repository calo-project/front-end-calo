import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../lib/axios';

export default function useFetchEvent(){

    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)

    const useFetchEvent = async () => {
        const res = await axiosInstance.get('/event')
        const data = res.data.data
        setEvent(data)
        setLoading(false)
    }
    
    useEffect(() => {
        useFetchEvent()
    }, [])
    // console.log(event);
    return {
        event,
        loading
    }
    
}