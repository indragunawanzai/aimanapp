import React, { useEffect } from 'react';
import {
    Image,
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { splash_logo } from '../../assets';
import { hp, wp } from '../../utils/Utils';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LandingAuth');
        }, 3000)
    }, [navigation])

    return (
        <View style={styles.container}>
            {/* <Image
                source={require('../Image/aboutreact.png')}
                style={{ width: '90%', resizeMode: 'contain', margin: 30 }}
            /> */}
            <ActivityIndicator
                // animating={animating}
                color="#FFFFFF"
                size="large"
                style={styles.activityIndicator}
            />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    // page: {
    //     flex: 1,
    //     // backgroundColor: '#7FFF00',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    imgSplash: {
        width: wp(100),
        height: hp(100),
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
    },
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
})