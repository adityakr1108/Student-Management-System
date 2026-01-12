import { notification } from "antd";

  const openNotificationWithIcon = (type,title,description) => {
    notification[type]({
      title,
      description
    });
  };

export const successNotification = (title,description) => {
    openNotificationWithIcon('success',title,description);
}
export const infoNotification = (title,description) => {
    openNotificationWithIcon('info',title,description);
}
export const warningNotification = (title,description) => {
    openNotificationWithIcon('warning',title,description);
}
export const errorNotification = (title,description) => {
    openNotificationWithIcon('error',title,description);
}