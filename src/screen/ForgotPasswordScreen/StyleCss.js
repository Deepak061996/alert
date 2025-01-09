import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const StyleCss = StyleSheet.create({
    container: {
        flex: 1,
    },
    topContainer: {
        width: width,
        height: 200, // Replace with appropriate dimension
        justifyContent: 'flex-start', // Adjust the layout
        padding: 20, // For margin
    },
    imageBackForgot: {
        width: 24,
        height:35,
    },
    image: {
        width: width,
        height: 200,
        resizeMode: 'cover',
    },
    backImageIcon: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
    },
    card_wrapper_bg: {
        position: 'relative',
        width: width,
        height: height,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
    },
    card_margin: {
        margin: 10,
        resizeMode: 'cover',
    },
    test_heading_style: {
        textAlign: 'center',
        color: '#000',
        fontSize: 30,
        marginTop: 20,
        fontWeight: 700,
        fontFamily: 'Urbanist-Bold',
    },
    inputContainer: {
        height: 50,
        marginTop: 20,
        fontWeight: 400,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(33, 87, 163, 1)',
        borderRadius: 45,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    icon: {
        width: 46,
        height: 47,
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        color: 'rgba(51, 51, 51, 1)',
        fontSize: 16,
    },
    passIcon: {
        width: 26,
        height: 20,
        position: 'relative',
        marginEnd: 20,
        marginStart: 10,
    },
    googleIcon: {
        width: 60,
        height: 60,
        position: 'relative',
        marginEnd: 20,
        marginStart: 10,
    },
    checkboxContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 20,
    },
    gmailContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    signupTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    viewStyle: {
        height: 1,
        backgroundColor: 'rgba(0, 0, 0, 1)',
        width: 40,
        marginVertical: 10,
    },
    rememberMeContainer: {
        flexDirection: 'row',
    },
    checkIcon: {
        width: 25, // Adjust based on the icon size
        height: 25,
    },
    forgotPasswordContainer: {
        marginLeft: 'auto',
    },
    commonText: {
        fontFamily: 'Urbanist-Bold',
        fontStyle: 'bold',
        fontSize: 16,
        fontWeight: 400,
        marginLeft: 10,
        color: 'rgba(0, 0, 0, 1)', // Replace with light_black color code
    },
    signupText: {
        fontFamily: 'Jost-Regular',
        fontSize: 18,
        fontWeight: 400,
        marginLeft: 10,
        color: 'rgba(23, 112, 186, 1)', // Replace with light_black color code
    },
});



export default StyleCss;