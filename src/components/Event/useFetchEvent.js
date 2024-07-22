import { useEffect, useState } from 'react';
import { axiosInstance } from '../../../lib/axios';

export default function useFetchEvent(){

    const [event, setEvent] = useState([])
    const [loading, setLoading] = useState(true)

    const useFetchEvent = async () => {
        const res = await axiosInstance.get('/getallevent')
        const data = res.data.data
        setEvent(data)
        setLoading(false)
    }
    
    useEffect(() => {
        useFetchEvent()
    }, [])
    
    return {
        event,
        loading
    }
    
}