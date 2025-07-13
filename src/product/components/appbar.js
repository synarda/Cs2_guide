import React from 'react';
import { Text, View } from 'react-native';
import { appStyle } from '../styles/app_style';
import AppTypography from '../styles/app_typography';
import appColors from '../constants/colors';

const AppBar = ({ title }) => {
    return (
        <View style={appStyle.appBar}>
            <Text style={[AppTypography.titleMedium, { color: appColors.primary }]}>{title}</Text>

        </View>
    );
};

export default AppBar;
