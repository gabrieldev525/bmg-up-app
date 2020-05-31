import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
        paddingHorizontal: 40,
        alignItems: "center"
    },

    title: {
        fontSize: 20,
        color: '#fe9a2e',
    },

    paragraph: {
        paddingTop: 70,
    },

    button: {
        position: "absolute",
        bottom: 30,
        backgroundColor: '#fe9a2e',
        height: 50,
        width: 200,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
    },

    textButton: {
        fontSize: 15,
        color: 'white',
    },

});