import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appStyle } from '../styles/app_style';
import AppTypography from '../styles/app_typography';
import appColors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppBar = ({ title, isbackArrowVisible = true }) => {
    const navigation = useNavigation();

    return (
        <View style={[appStyle.appBar, { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }]}>
            {isbackArrowVisible ? (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="angle-left" size={24} color="#fff" />
                </TouchableOpacity>
            ) : (
                <View style={{ width: 24 }} />
            )}

            <Text style={[AppTypography.titleMedium, { color: appColors.primary }]}>{title}</Text>
            <View style={{ width: 24 }} />
        </View>
    );
};

export default AppBar;
