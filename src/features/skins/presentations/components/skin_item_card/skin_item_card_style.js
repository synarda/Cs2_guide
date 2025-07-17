import { StyleSheet } from 'react-native';
import appColors from '../../../../../product/constants/colors';

export const skinItemCardStyle = StyleSheet.create({

    card: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        backgroundColor: appColors.forebackground,
        borderRadius: 16,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
    },
    info: {
        flex: 1
    },
    rarity: {
        color: '#8cf',
        fontSize: 12,
        marginTop: 2
    }
});