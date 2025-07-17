import React from 'react';
import { View, Text } from 'react-native';
import AppImage from '../../../../../product/components/app_image';
import { Skin } from '../../models/skin_card_model';
import { skinItemCardStyle } from './skin_item_card_style';
import AppTypography from '../../../../../product/styles/app_typography';


type SkinsScreenCardItemProps = {
    skin: Skin;
};

const SkinsScreenCardItem: React.FC<SkinsScreenCardItemProps> = ({ skin }) => {
    return (
        <View style={skinItemCardStyle.card} key={skin.id}>
            <AppImage
                source={skin.image}
                resizeMode="cover"
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 12,
                    backgroundColor: "#222",
                    alignItems: "center",
                    textAlign: "center"
                }}
            />
            <View style={{ width: 12 }}></View>
            <View style={skinItemCardStyle.info}>
                <Text style={AppTypography.bodyLarge_Bold}>{skin.name}</Text>
                <Text style={AppTypography.bodySmall} numberOfLines={2}>{skin.description}</Text>
                <Text style={skinItemCardStyle.rarity}>Rarity: {skin.rarity.name}</Text>
            </View>
        </View>
    );
};

export default SkinsScreenCardItem;
