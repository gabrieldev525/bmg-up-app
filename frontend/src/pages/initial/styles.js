import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fe9a2e',
      paddingTop: Constants.statusBarHeight,
    },

    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      paddingTop: 50,
    },

    value: {
      fontSize: 25,
      color: "white",
    },

    balance: {
      color: "white",
    },

    bankAccount: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      paddingVertical: 30,
    },

    dollarDescription: {
      flexDirection: "row"
    },

    accountDescription: {
      paddingLeft: 15,
    },

    bodyContent: {
      backgroundColor: "white",
      height: "100%",
      borderTopStartRadius: 25,
      borderTopRightRadius: 25,
      paddingTop: 40,
      paddingHorizontal: 30,
    },

    headerContent: {
      flexDirection: "row",
      justifyContent: "space-between"
    },

    textHeaderContent: {
      fontSize: 20
    },

    textBlogButton: {
      color: '#fe9a2e',
      fontSize: 13,
    },

    subContent: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 15,
    },

    textSubContent: {
      paddingLeft: 15,
    },

    titleSubContent: {
      fontSize: 15,
    },

    descriptionSubContent: {
      paddingRight: 37,
      fontSize: 12,
    },

    options: {
      flexDirection: "row",
      padding: 30,
      width: 140,
      height: 80,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      elevation: 2,
      marginBottom: 10,
      marginHorizontal: 5,
    },
    
    titleOptions: {
      color: '#fe9a2e',
      paddingLeft: 10,
    },

    inputContainer: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

});

