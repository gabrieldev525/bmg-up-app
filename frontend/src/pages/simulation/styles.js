import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Constants.statusBarHeight,
    },

    header: {
      height: 80,
      width: "100%",
      backgroundColor: '#fe9a2e',
      justifyContent: "center",
      paddingHorizontal: 10, 
    },

    content: {
      padding: 20,
    },

    title: {
      fontSize: 20,
      paddingBottom: 30
    },

    emptyBox: {
        height: 200,
        borderWidth: 3,
        borderRadius: 1,
        borderColor: "#ccc",
        borderStyle: "dashed",
        marginBottom: 30,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 70,
    },

    textBox: {
        color: "#ccc",
        textAlign: "center"
    },

    listOfInvestiments: {
        flexDirection: "row",
        marginBottom: 10
    },

    investmentText: {
        fontSize: 12,
    },

    investmentTextButton: {
        borderBottomWidth: 2,
        borderColor: "#ccc",
        marginHorizontal: 3,

    },

    investimentContainer: {
        marginVertical: 10,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        elevation: 1,
        justifyContent: "space-between"
    },

    investimentName: {
        color: '#fe9a2e'
    },

    moveContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    descriptionContainer: {
        paddingRight: 10,
        alignItems: "center"
    },

    rate: {
        color: "#ccc"
    },

    profitability: {
        color: "#ccc"
    },

    investimentSimulateContainer: {
        marginBottom: 30,
        padding: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    simulateText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10
    },

    textSimulateContainer: {
        alignItems: "center"
    },

    label: {
        color: "#ccc",
        paddingBottom: 5,
    },

    input: {
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#ccc",
    },

    viewButton: {
        alignItems: "center"
    },

    button: {
        marginTop: 10,
        height: 50,
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fe9a2e',
        borderRadius: 25,
    },

    textButton: {
        color: "white",
        fontSize: 20,
    },
});