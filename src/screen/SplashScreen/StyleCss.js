import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const StyleCss = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    },
    image:{
        width:width,
        height:height,
        resizeMode:'cover',
    },
});



export default StyleCss;