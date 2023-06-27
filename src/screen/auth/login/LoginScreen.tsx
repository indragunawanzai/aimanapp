import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { hp, wp } from '../../../utils/Utils';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TextInputComponents from '../../../components/TextInputComponents';
import Button from '../../../components/Button';
import { colors } from '../../../utils/colors/Colors';
import { Platform } from 'react-native';
import { Space } from '../../../components/Space';

const LoginScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [emailFailed, setEmailFailed] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);

    const [phoneNumber, setPhoneNumber] = useState('');

    const validateEmail = (text: any) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        setEmail(text)
        setEmailFailed(reg.test(text))
    }

    return (
        <View style={styles.page}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerStyle}
            >
                <KeyboardAvoidingView behavior='padding' style={{ flex: 1 }}>
                    <View style={styles.viewHeader}>
                        <TouchableOpacity
                            style={{ paddingRight: wp(10) }}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <SimpleLineIcons name="arrow-left" size={18} />
                        </TouchableOpacity>
                        <View style={styles.viewTxtTitle}>
                            <Text style={styles.txt20Bold}>Silakan Masuk</Text>
                            <TouchableOpacity
                                // onPress={() => navigation.navigate('LandingRegister')}
                            >
                                <Text style={styles.txt18Bold}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Space height={hp(40)} />

                    <View>
                        {!emailFailed && email?.length > 0 ? (
                            <TextInputComponents
                                type="wrong-email"
                                label="Email"
                                message="*format email salah"
                                keyboardType="default"
                                autoCapitalize="none"
                                placeholder="Masukkan Email.."
                                value={email}
                                onChangeText={(txt) => validateEmail(txt)}
                            />
                        ) : (
                            <TextInputComponents
                                label="Email"
                                keyboardType="default"
                                autoCapitalize="none"
                                placeholder="Masukkan Email.."
                                value={email}
                                onChangeText={(txt) => validateEmail(txt)}
                            />
                        )}

                        <Space height={hp(24)} />

                        {password?.length > 1 && password?.length < 6 ? (
                            <TextInputComponents
                                showPassword={showPassword}
                                setShowPassword={(item) => setShowPassword(item)}
                                secureTextEntry={showPassword}
                                type="wrong-password"
                                label="Kata Sandi"
                                message="Kata Sandi Minimal 6 Karakter"
                                placeholder="Masukkan Kata Sandi.."
                                value={password}
                                onChangeText={(txt) => setPassword(txt)}
                            />
                        ) : (
                            <TextInputComponents
                                showPassword={showPassword}
                                setShowPassword={(item) => setShowPassword(item)}
                                secureTextEntry={showPassword}
                                type="password"
                                label="Kata Sandi"
                                placeholder="Masukkan Kata Sandi.."
                                value={password}
                                onChangeText={(txt) => setPassword(txt)}
                            />
                        )}

                        <TouchableOpacity
                            style={styles.btnLupaSandi}
                            onPress={() => navigation.navigate('LandingLupaKataSandiLogin')}
                        >
                            <Text style={styles.txt14Normal}>Lupa Kata Sandi</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.borderDashed} />

                </KeyboardAvoidingView>
            </ScrollView>

            {phoneNumber.length > 7 ? (
                <Button
                    label="Masuk"
                // onPress={() => handleLoginByHandphone()}
                />
            ) : (
                <Button label="Masuk" button="disable" />
            )}

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        // backgroundColor: 'red'
    },
    containerStyle: {
        paddingTop: hp(45),
        paddingBottom: hp(45),
        paddingHorizontal: wp(24)
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? hp(35) : hp(10),
    },
    viewTxtTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    txt20Bold: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600',
        color: colors.neutral100
    },
    txt18Bold: {
        fontSize: 18,
        lineHeight: 24,
        fontWeight: '600',
        textDecorationLine: 'underline',
        color: colors.primaryGreenMain
    },
    txt14Normal: {
        fontSize: 14,
        lineHeight: 24,
        color: '#24516A',
        textDecorationLine: 'underline'
    },
    borderDashed: {
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#E8E8E9',
        marginVertical: hp(24),
    },
    btnLupaSandi: {
        marginTop: hp(24),
        alignSelf: 'flex-end'
    }
})
