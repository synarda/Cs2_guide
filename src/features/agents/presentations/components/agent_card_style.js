import { StyleSheet } from 'react-native';
import appColors from '../../../../product/constants/colors';

export const AgentCardStyle = StyleSheet.create({
    agentCard: {
        width: '100%', // '%100' yerine '100%' olmalı
        margin: 16,
        padding: 16,
        alignItems: "flex-start", // alignContent yerine alignItems
        justifyContent: "flex-start",
        flexDirection: "row",
        backgroundColor: appColors.forebackground,
        borderRadius: 16
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 8,
        flexShrink: 0, // Resmin küçülmesini engeller
    },
    textContainer: {
        flexDirection: "column",
        flex: 1, // Kalan alanı kaplar
        marginLeft: 12, // Resim ile metin arasında boşluk
        overflow: 'hidden', // Taşan içeriği gizler
    },
    nameText: {
        marginBottom: 4,
    },
    descriptionText: {
        flex: 1,
    }
});