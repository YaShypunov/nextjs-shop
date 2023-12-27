import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
  notification: null, 
  showNotification: (notificationData) => {},
  hideNotification: () => {},
})

export const NotificationContextProvider = ({children, }) => {
  const [activeNotification, setActiveNotification] = useState(null);

  const showNotificationHandler = (notificationData) => {
    setActiveNotification({
      title: notificationData.title,
      message: notificationData.message,
      status: notificationData.status
    });
  }
  const hideNotificationHandler = () => {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  }


  useEffect(() => {
    if(['success', 'error'].includes(context?.notification?.status)) {
      const timer = setTimeout(() => {
        context.hideNotification();
      }, 3000)
      return () => {
        clearTimeout(timer);
      }

    }
  }, [context])
  
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  )
}
export default NotificationContext;
