import { StyleSheet } from 'react-native'

const size = 80;

const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#383838",
        margin: 5
    },
    operationButton: {
        backgroundColor: "#FF9203",
    },
    clearButton: {
        backgroundColor: "#FF0352"
    },
    symbol: {
        fontFamily: "Arial",
        fontSize: size / 2,
        padding: 8,
        color: "#fff"
    }
  });
  
  export default styles;