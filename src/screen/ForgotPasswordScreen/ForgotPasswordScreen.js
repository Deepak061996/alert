import React from 'react';
import { Image, Text, TextInput, View, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StyleCss from '../ForgotPasswordScreen/StyleCss';
import CustomButton from '../CustomComponent/CustomButton/CustomButton';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();

  // Unified navigation function
  const handleNavigation = (type) => {
    if (type === 'back') {
      navigation.goBack();
    } else if (type === 'otp') {
      navigation.navigate('OtpScreen');
    }
  };

  return (
    <View style={StyleCss.container}>
      <ImageBackground
        source={require('../../assets/login_logo.png')} // Replace with your actual image path
        style={StyleCss.topContainer}
      >
        <TouchableOpacity onPress={() => handleNavigation('back')} activeOpacity={0.7}>
          <Image
            source={require('../../assets/back_icon.png')}
            style={StyleCss.imageBackForgot}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View style={StyleCss.card_wrapper_bg}>
        <View style={StyleCss.card_margin}>
          <Text style={StyleCss.test_heading_style}>Forgot Password</Text>
          <View style={StyleCss.inputContainer}>
            <Image
              style={StyleCss.icon}
              source={require('../../assets/email_icon.png')}
            />
            <TextInput
              style={StyleCss.textInput}
              placeholder="Enter your registered email/phone"
              placeholderTextColor="rgba(51, 51, 51, 1)"
            />
          </View>
          {/* Use the CustomButton component */}
          <CustomButton onPress={() => handleNavigation('otp')} title="Submit" />
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
