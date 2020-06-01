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
      flex: 1,
      padding: 30,
    },

    title: {
      fontSize: 17,
      paddingBottom: 20,
    },

    value: {
      fontSize: 25,
    },

    balance: {
      fontSize: 12,
      color: "#aaa"
    },

    viewOrangeButton: {
      position: "absolute",
      bottom: 20,
      alignItems: "center",
      width: 360,
    },

    orangeButton: {
      borderRadius: 15,
      width: 200,
      height: 50,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: '#fe9a2e',
    },

    textOrangeButton: {
      color: "white",
      fontSize: 15
    },
});

