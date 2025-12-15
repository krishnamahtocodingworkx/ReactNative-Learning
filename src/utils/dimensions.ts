import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
const scaleSize = (size: any) => (width / BASE_WIDTH) * size;
const verticalScaleSize = (size: any) => (height / BASE_HEIGHT) * size;
// const responsiveFontSize = (size: any) =>size * PixelRatio.getFontScale()
export const vw = (size: any) => scaleSize(size);
export const vh = (size: any) => scaleSize(size);
export const fs = (size: any) => scaleSize(size);
export default {
    vw,
    vh,
    fs,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
};