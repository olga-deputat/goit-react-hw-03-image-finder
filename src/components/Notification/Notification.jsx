import { NotificationText, NotificationWrapper } from './Notification.styled';

export const Notification = ({ text }) => {
  return (
    <NotificationWrapper>
      <NotificationText>{text}</NotificationText>
    </NotificationWrapper>
  );
};
