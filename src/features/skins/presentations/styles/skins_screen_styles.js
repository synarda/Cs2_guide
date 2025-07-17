import { StyleSheet } from 'react-native';


export const skinsScreenStyle = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        flexDirection: 'row',
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#181A20',
        borderRadius: 10,
        alignItems: 'center'
    },
    image: {
        width: 72,
        height: 40,
        borderRadius: 4,
        marginRight: 12
    },
    info: {
        flex: 1
    },
    title: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    desc: {
        color: '#ccc',
        fontSize: 12,
        marginTop: 2
    },
    rarity: {
        color: '#8cf',
        fontSize: 12,
        marginTop: 2
    }
});