/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../utils/colors/Colors';
import { hp, wp } from '../utils/Utils';

interface TextinputProps {
    setShowPassword?: (show: boolean) => void;
    onChangeText?: (text: string) => void;
    onPressIn?: () => void;
    onPress?: () => void;
    showPassword?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    secureTextEntry?: boolean;
    label?: string;
    placeholder?: string;
    keyboardType?: 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad';
    value: string | undefined;
    type?: 
        | 'modal'
        | 'password'
        | 'wrong-password'
        | 'text-area'
        | 'wrong-email'
        | 'wrong-email-login'
        | 'disable'
        | 'default';
    icon?: string,
    message?: string,
}

const TextInputComponents: React.FC<TextinputProps> = ({
    setShowPassword,
    onChangeText,
    onPressIn,
    onPress,
    showPassword,
    autoCapitalize,
    secureTextEntry,
    label,
    placeholder,
    keyboardType,
    value,
    type,
    icon,
    message,
}) => {
    if (type == 'modal') {
        return (
            <View>
                <Text style={styles.txtLabel}>{label}</Text>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.viewInput}
                >
                    <TextInput
                        onPressIn={onPress}
                        style={styles.txtInputSearch}
                        placeholder={placeholder}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        value={value}
                        editable={false}
                        multiline
                    />
                    <Feather name={icon} size={20} color="#28303F" />
                </TouchableOpacity>
            </View>
        );
    } else if (type == 'password') {
        return (
            <View>
                <Text style={styles.txtLabel}>{label}</Text>
                <View style={styles.viewInput}>
                    <TextInput
                        style={styles.txtInputSearch}
                        placeholder={placeholder}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        value={value}
                        secureTextEntry={secureTextEntry}
                    />

                    {showPassword ? (
                        <TouchableOpacity onPress={() => setShowPassword(false)}>
                            <MaterialCommunityIcons name="eye-off" size={24} color={colors.neutral80} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setShowPassword(true)}>
                            <MaterialCommunityIcons name="eye" size={24} color={colors.neutral80} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        );
    } else if (type == 'wrong-password') {
        return (
            <View>
                <Text style={styles.txtLabelWrong}>{label}</Text>
                <View style={styles.viewInputWrong}>
                    <TextInput
                        style={styles.txtInputSearchWrong}
                        placeholder={placeholder}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        value={value}
                        secureTextEntry={secureTextEntry}
                    />

                    {showPassword ? (
                        <TouchableOpacity onPress={() => setShowPassword(false)}>
                            <MaterialCommunityIcons name="eye-off" size={24} color={colors.neutral80} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setShowPassword(true)}>
                            <MaterialCommunityIcons name="eye" size={24} color={colors.neutral80} />
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.txtMessageWrong}>{message}</Text>
            </View>
        );
    } else if (type == 'text-area') {
        return (
            <View>
                <Text style={styles.txtLabel}>{label}</Text>
                <TextInput
                    style={styles.txtTextArea}
                    placeholder={placeholder}
                    placeholderTextColor="#E6E6E6"
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    value={value}
                    multiline={true}
                />
            </View>
        );
    } else if (type == 'wrong-email') {
        return (
            <View>
                <Text style={styles.txtLabelWrong}>{label}</Text>
                <TextInput
                    style={styles.txtInputError}
                    onPressIn={onPressIn}
                    placeholder={placeholder}
                    placeholderTextColor="#E6E6E6"
                    keyboardType={keyboardType}
                    onChangeText={onChangeText}
                    value={value}
                    multiline={true}
                />
                <Text style={styles.txtMessageWrong}>{message}</Text>
            </View>
        );
    } else if (type == 'wrong-email-login') {
        return (
            <View>
                <Text style={styles.txtLabelWrong}>{label}</Text>
                <View style={styles.viewInputWrongLogin}>
                    <TextInput
                        style={styles.txtInputSearchWrong}
                        placeholder={placeholder}
                        onPressIn={onPressIn}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        value={value}
                        multiline={true}
                    />
                </View>
                <Text style={styles.txtMessageWrong}>{message}</Text>
            </View>

        );
    } else {
        return (
            <View>
                <Text style={styles.txtLabel}>{label}</Text>
                {type === 'disable' ? (
                    <TextInput
                        style={styles.txtInputDisable}
                        placeholder={placeholder}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        autoCapitalize={autoCapitalize}
                        value={value}
                        editable={false}
                    />
                ) : (
                    <TextInput
                        style={styles.txtInput}
                        placeholder={placeholder}
                        placeholderTextColor="#E6E6E6"
                        keyboardType={keyboardType}
                        onChangeText={onChangeText}
                        autoCapitalize={autoCapitalize}
                        value={value}
                        multiline={true}
                    />
                )}
            </View>
        );
    }
};

export default TextInputComponents;

const styles = StyleSheet.create({
    txtLabel: {
        color: colors.gray20,
        fontSize: 14,
        marginBottom: hp(8),
        fontWeight: '600',
        lineHeight: 24
    },
    txtLabelWrong: {
        color: colors.primary,
        fontSize: 14,
        marginBottom: hp(8),
        fontWeight: '600',
        lineHeight: 24
    },
    txtInput: {
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.gray88,
        color: colors.black,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        paddingHorizontal: wp(16),
    },
    txtInputError: {
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.primary,
        color: colors.black,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        paddingHorizontal: wp(16),
    },
    txtInputDisable: {
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.neutral40,
        backgroundColor: colors.gray88,
        color: colors.black,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        paddingHorizontal: wp(16),
    },
    txtTextArea: {
        borderRadius: 5,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colors.gray88,
        color: colors.black,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        paddingHorizontal: wp(16),
        height: hp(130)
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray88,
        paddingHorizontal: wp(20),
        borderRadius: 5,
    },
    viewInputWrong: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#F2C4C8',
        borderColor: colors.primary,
        paddingHorizontal: wp(20),
        borderRadius: 5,
    },
    viewInputWrongLogin: {
        // flexDirection: 'row',
        // alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#F2C4C8',
        borderColor: colors.primary,
        paddingHorizontal: wp(20),
        borderRadius: 5,
    },
    txtInputSearch: {
        flex: 1,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        fontSize: 16,
    },
    txtInputSearchWrong: {
        flex: 1,
        paddingTop: hp(13),
        paddingBottom: hp(13),
        fontSize: 16,
        color: colors.primary
    },
    txtMessageWrong: {
        fontSize: 12,
        lineHeight: 24,
        color: colors.primary,
        marginTop: hp(5),
    },
});