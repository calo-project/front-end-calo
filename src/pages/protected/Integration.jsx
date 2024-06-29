import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice.jsx'
import Integration from '../../features/integration/index.jsx'

function InternalPage(){

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Integrations"}))
      }, [])
      
    return(
        <Integration />
    )
}

export default InternalPage