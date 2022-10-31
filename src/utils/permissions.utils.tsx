import { PermissionsAndroid, PermissionStatus } from 'react-native';

export const requestWriteToStoragePermission = async (): Promise<PermissionStatus> => {
  try {
    return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  } catch (error) {
    return 'denied';
  }
};

export const requestLocationPermission = async (): Promise<PermissionStatus> => {
  try {
    return await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  } catch (error) {
    return 'denied';
  }
};
