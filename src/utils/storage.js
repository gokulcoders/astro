import { MMKV } from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'user-storage', // optional ID, helps if you want multiple instances
});
