/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
} from 'react-native';
import { colors } from '../utils/colors/Colors';
import { hp, wp } from '../utils/Utils';

interface ButtonProps {
    onPress?: () => void;
    label?: string;
    button?: 'enable' | 'disable';
    border?: boolean;
    type?: 'save-address' | 'loading' | 'default';
}

const Button: React.FC<ButtonProps> = ({
    onPress,
    label,
    button,
    border,
    type,
}) => {
    if (border == true) {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.buttonBorder}
                >
                    <Text style={styles.txtLabelBorder}>{label}</Text>
                </TouchableOpacity>
            </View>
        )
    } else if (type == 'save-address') {
        return (
            <View>
                {button === 'disable' ? (
                    <View style={styles.buttonOff} >
                        <Text style={styles.txtLabel}>{label}</Text>
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.button}
                    >
                        <Text style={styles.txtLabel}>{label}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    } else if (type == 'loading') {
        return (
            <View style={styles.container}>
                <View style={styles.buttonOff} >
                    <ActivityIndicator size="small" color={colors.neutral80} />
                </View>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                {button === 'disable' ? (
                    <View style={styles.buttonOff} >
                        <Text style={styles.txtLabel}>{label}</Text>
                    </View>
                ) : (
                    <TouchableOpacity
                        onPress={onPress}
                        style={styles.button}
                    >
                        <Text style={styles.txtLabel}>{label}</Text>
                    </TouchableOpacity>
                )}
            </View>
        )
    }
};

export default Button;

const styles = StyleSheet.create({
    container: {
        paddingVertical: hp(27),
        paddingHorizontal: wp(26),
        backgroundColor: colors.white
    },
    button: {
        backgroundColor: colors.primaryGreenMain,
        paddingVertical: hp(18),
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonOff: {
        backgroundColor: colors.neutral40,
        paddingVertical: hp(18),
        alignItems: 'center',
        borderRadius: 8,
    },
    txtLabel: {
        fontSize: 16,
        color: colors.white,
        lineHeight: 24,
        fontWeight: '500'
    },
    buttonBorder: {
        borderWidth: 1,
        borderColor: colors.primary,
        backgroundColor: colors.white,
        paddingVertical: hp(18),
        alignItems: 'center',
        borderRadius: 8,
    },
    txtLabelBorder: {
        fontSize: 16,
        color: colors.primary,
        lineHeight: 24,
        fontWeight: '500'
    }
});
