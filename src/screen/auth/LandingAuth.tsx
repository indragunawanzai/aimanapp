import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    View,
} from 'react-native';
import { hp, wp } from '../../utils/Utils';
import Button from '../../components/Button';
import { colors } from '../../utils/colors/Colors';

const LandingAuth = ({ navigation }: any) => {

    const image = require('../../assets/image/image_background_login.webp');
    const logo = require('../../assets/image/logotb_login.webp');

    return (
        <View style={styles.page}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.imageBacground}
            >
                {/* <View style={{ flex: 1 }}>
                    <View style={{ paddingHorizontal: wp(10) }}>
                        <Image source={logo} style={styles.icLogo} />
                    </View>
                    <View style={styles.viewText}>
                        <Text style={styles.txt26Bold}>Memberikan Pengalaman terbaik untuk Anda dalam pengiriman kargo dan logistik!</Text>
                    </View>
                </View> */}

                <View style={styles.viewBottom}>
                    <Button
                        type="save-address"
                        label="Login"
                        onPress={() => navigation.navigate('LoginScreen')}
                    />
                    <Text
                        onPress={() => navigation.navigate('LandingRegister')}
                        style={styles.txt16}
                    >Belum Memiliki akun?</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LandingAuth

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    imageBacground: {
        flex: 1,
        paddingTop: hp(94),
    },
    icLogo: {
        height: hp(60),
        width: wp(225),
        resizeMode: 'cover'
    },
    txt26Bold: {
        fontSize: 26,
        lineHeight: 31,
        fontWeight: '700',
        color: colors.white
    },
    viewText: {
        paddingHorizontal: wp(24),
        marginTop: hp(10)
    },
    txt16: {
        textAlign: 'center',
        marginTop: hp(18),
        color: colors.white,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18
    },
    viewBottom: {
        flex: 1,
        paddingHorizontal: wp(24),
        top: '32%'
    }
})