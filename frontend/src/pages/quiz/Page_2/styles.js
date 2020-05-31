import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 30,
        alignItems: "center"
    },

    paragraph: {
        textAlign: "justify",
    },
    
    question: {
        paddingVertical: 20,
        fontSize: 12,
        fontWeight: "bold",
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