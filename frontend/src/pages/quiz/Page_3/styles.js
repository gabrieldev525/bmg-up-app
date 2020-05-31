import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 70,
        paddingHorizontal: 25,
        alignItems: "center"
    },

    titleWrong: {
        color: "#fa5858",
        fontSize: 30,
        paddingVertical: 20,
    },

    titleRight: {
        color: "#81f79f",
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