import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice.jsx'
import ProfileSettings from '../../features/settings/profilesettings/index.jsx'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Settings"}))
      }, [])


    return(
        <ProfileSettings />
    )
}

export default InternalPage