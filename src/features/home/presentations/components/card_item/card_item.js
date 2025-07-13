import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cardItemStyle } from './card_item_style';
import AppTypography from '../../../../../product/styles/app_typography';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreenCardItem = ({
    title = '',
    description = '',
    path = '',
    url = '',
}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (path) {
            navigation.navigate(path, { url });
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={cardItemStyle.cardStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={AppTypography.bodyMedium_Bold}>{title}</Text>
                    <View style={{ height: 4 }}></View>
                    <Text style={AppTypography.labelSmall}>{description}</Text>
                </View>
                <Icon name="angle-right" size={24} color="#fff" />
            </View>
        </TouchableOpacity>
    );

};

export default HomeScreenCardItem;
