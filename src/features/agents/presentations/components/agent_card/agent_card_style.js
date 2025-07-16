import { StyleSheet } from 'react-native';
import appColors from '../../../../../product/constants/colors';
export const AgentCardStyle = StyleSheet.create({
    agentCard: {
        width: '100%',
        marginVertical: 8,
        padding: 16,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        backgroundColor: appColors.forebackground,
        borderRadius: 16
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 8,
        flexShrink: 0,
    },
    textContainer: {
        flexDirection: "column",
        marginHorizontal: 12,
        overflow: 'hidden',
        flex: 1,
        paddingRight: 8,
    },
    nameText: {
        marginBottom: 4,
    },
    descriptionText: {
        flex: 1,
    },
    teamTag: {
        borderRadius: 16,
        margin: 4,
        padding: 4,

    }
});