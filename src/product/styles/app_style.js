import { StyleSheet } from 'react-native';
import appColors from "../constants/colors";

export const appStyle = StyleSheet.create({

    appLayout: {
        width: '100%',
        height: '100%',
        backgroundColor: appColors.background,
    },
    appBar: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.forebackground,
        paddingHorizontal: 16,
    },
});




