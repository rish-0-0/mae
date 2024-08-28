import {notifications} from '@mantine/notifications';

export const showErrorNotification = (title, message) => {
  notifications.show({
    color: 'red',
    title,
    message
  });
};

export const showSuccessNotification = (title, message) => {
  notifications.show({
    color: 'green',
    title,
    message
  });
};

export const showStatusNotification = (title, message) => {
  notifications.show({
    color: 'blue',
    title,
    message
  });
};
