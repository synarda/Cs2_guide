import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { cardItemStyle } from './card_item_style';
import AppTypography from '../../../../../product/styles/app_typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import AppImage from '../../../../../product/components/app_image';


const HomeScreenCardItem = ({
    title = '',
    description = '',
    path = '',
    url = '',
    photoUrl = ""
}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (path) {
            navigation.navigate(path, { url });
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={cardItemStyle.cardStyle}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                <View style={{ flexDirection: 'row' }}>
                    <AppImage
                        source={photoUrl}
                        resizeMode="contain"
                        style={{ height: 70, width: 70 }}
                    />
                    <View style={{ width: 6 }}></View>
                    <View style={{ alignContent: "center" }}>
                        <Text style={AppTypography.titleLarge_Bold}>{title}</Text>
                        <View style={{ height: 4 }}></View>
                        <Text style={AppTypography.labelSmall}>{description}</Text>
                    </View>
                </View>
                <Icon name="angle-right" size={24} color="#fff" />
            </View>
        </TouchableOpacity >
    );

};

export default HomeScreenCardItem;
