import { Image, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleCss from '../ForgotPasswordScreen/StyleCss';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {

  const navigation = useNavigation();

  const moveToBackScreen = () => {
    navigation.goBack();
  };

  return (

    <View style={StyleCss.container}>

      <ImageBackground
        source={require('../../assets/login_logo.png')} // Replace with your actual image path
        style={StyleCss.topContainer}>

        <TouchableOpacity onPress={moveToBackScreen} activeOpacity={0.7}>
          <Image
            source={require('../../assets/back_icon.png')}
            style={StyleCss.imageBackForgot}
          />
        </TouchableOpacity>

      </ImageBackground>

      <View style={StyleCss.card_wrapper_bg}>
        <View style={StyleCss.card_margin}>
          <Text style={StyleCss.test_heading_style}> Forgot Password </Text>
          <View style={StyleCss.inputContainer}>
            <Image
              style={StyleCss.icon}
              source={require('../../assets/email_icon.png')}
            />
            <TextInput
              style={StyleCss.textInput}
              placeholder="Enter your registered email/phone"
              placeholderTextColor="rgba(51, 51, 51, 1)" />
          </View>


          <View style={StyleCss.buttonContainer}>
            <LinearGradient
              colors={['rgba(15, 135, 205, 1)', 'rgba(26, 105, 180, 1)', 'rgba(38, 75, 155, 1)']} // Gradient colors
              style={StyleCss.gradient}
              start={{ x: 0, y: 0 }} // Start point (top-left)
              end={{ x: 1, y: 1 }}   // End point (bottom-right)
            >
              <Text style={StyleCss.text}>Submit</Text>
            </LinearGradient>
          </View>

        </View>
      </View>

    </View>
  );

};

export default ForgotPasswordScreen;