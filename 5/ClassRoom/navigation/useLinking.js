import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Question: 'Hỏi đáp',
          DailyLogs: 'Nhật ký',
          Classrooms: 'Lớp học',
          Notifications: 'Thông báo',
          Account: 'Tài khoản',
        },
      },
    },
  });
}
