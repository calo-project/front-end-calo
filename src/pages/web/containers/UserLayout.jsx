import PageContent from "./PageContent"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import  {  removeNotificationMessage } from "../../../features/common/headerSlice.jsx"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ModalLayout from "./ModalLayout"

function UserLayout(){
  const dispatch = useDispatch()
  const {newNotificationMessage, newNotificationStatus} = useSelector(state => state.header)


  useEffect(() => {
      if(newNotificationMessage !== ""){
          if(newNotificationStatus === 1)NotificationManager.success(newNotificationMessage, 'Success')
          if(newNotificationStatus === 0)NotificationManager.error( newNotificationMessage, 'Error')
          dispatch(removeNotificationMessage())
      }
  }, [newNotificationMessage])

    return(
      <>
        { /* Left drawer - containing page content and side bar (always open) */ }
        <div className="drawer  lg:drawer-open overflow-x-hidden">
            <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
            <PageContent/>
        </div>

        { /* Right drawer - containing secondary content like notifications list etc.. */ }


        {/** Notification layout container */}
        <NotificationContainer />

      {/* Modal layout container */}
        <ModalLayout />

      </>
    )
}

export default UserLayout