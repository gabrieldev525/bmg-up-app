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
      padding: 30,
    },

    value: {
      fontSize: 25,
    },

    balance: {
      color: "#8a2908",
    },

    addGoalsContainer: {
      paddingTop: 40,
      paddingBottom: 35,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    goalText: {
      fontSize: 20,
    },

    goalContainer: {
      marginVertical: 10,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 15,
      elevation: 1

    },

    valueGoal: {
      position: "absolute",
      right: 0,
      flexDirection: "row",
      alignItems: "center"
    },

    textValueGoal: {
      color: '#fe9a2e',
      paddingRight: 5,
    },

    descriptionContainer: {
      paddingLeft: 15
    },

    buyGoalText: {
      color: '#fe9a2e',
    },

    descriptionGoal: {
      fontSize: 12
    },

});