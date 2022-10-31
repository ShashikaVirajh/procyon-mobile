import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

// based on standard ~5" screen mobile device
const baseWidth = 350;
const scale = (size: number): number => (SCREEN_WIDTH / baseWidth) * size;

export const scaledNumber = (size: number, factor: number = 1): number => {
  return size + (scale(size) - size) * factor;
};
