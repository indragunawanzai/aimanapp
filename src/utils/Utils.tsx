/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const heigtMobileUI = 896;
const widthMobileUI = 414;

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export const wp = (width: number) => {
    return (windowWidth * width) / widthMobileUI;
};

export const hp = (height: number) => {
    return (windowHeight * height) / heigtMobileUI;
};

export const numberWithCommas = (x: number) => {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}