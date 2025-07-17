import { StyleSheet } from 'react-native';
import appColors from '../../../../../product/constants/colors';

export const cardItemStyle = StyleSheet.create(
    {
        cardStyle: {
            width: "½100",
            marginVertical: 10,
            marginHorizontal: 16,
            padding: 16,
            borderRadius: 16,
            alignContent: "flex-start",
            backgroundColor: appColors.forebackground,
        },
        image: {
            width: 60,
            height: 60,
            marginTop: 8,
            flexShrink: 0,
        },
    }

);