import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35,
        paddingHorizontal: 30,
    },

    title: {
        fontSize: 20,
        marginBottom: 30,
    },

    label: {
        paddingBottom: 5,
    },

    input: {
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    viewPicker: {
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 20,
        paddingHorizontal: 20,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,

    },

    textarea: {
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 15,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    viewButton: {
        alignItems: "center",
        paddingBottom: 20,
    },

    button: {
        padding: 8,
        height: 50,
        width: 150,
        backgroundColor: '#fe9a2e',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },

    textButton: {
        color: 'white',
        fontSize: 17,
    }
});