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

    balanceContainer: {
        paddingBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },

    balance: {
        height: 80,
        width: 140,
        marginVertical: 10,
        justifyContent: "center",
        padding: 10,
        borderRadius: 15,  
        elevation: 2,
    },

    buyGoalText: {
        color: '#fe9a2e',
        fontSize: 20,
    },

    descriptionGoal: {
        fontSize: 12,
        color: "#aaa",
    },

    orangeButton: {
        backgroundColor: "#fe9a2e",
        paddingLeft: 15,
        marginBottom: 30,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 13,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 3,
    },

    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },

    textButton: {
        paddingLeft: 15,
        color: "white",
        fontSize: 15,
    },

    title: {
        fontSize: 15,
        marginBottom: 10
    },

    chart: {
        height: 150,
        borderWidth: 3,
        marginBottom: 20,
    },

    flatList: {
        marginBottom: 20,
    },

    registerContainer: {
        marginVertical: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
    },

    descriptionContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    registerValue: {
        fontSize: 12,
        paddingLeft: 15,
    },

    date: {
        fontSize: 12
    }
});