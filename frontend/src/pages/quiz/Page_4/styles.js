import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 70,
        paddingHorizontal: 30,
        alignItems: "center"
    },

    title: {
        color: "#fe9a2e",
        fontSize: 30,
        paddingVertical: 20,
    },

    paragraph: {
        paddingTop: 20,
        textAlign: "justify",
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