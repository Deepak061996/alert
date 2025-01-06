import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import StyleCss from '../LoginScreen/StyleCss';
import { useNavigation } from '@react-navigation/native';



const Index = () => {

  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    console.log('Checkbox clicked, current state:', isChecked);
    setIsChecked(!isChecked);
  };

  const moveToSignUpScreen = () => {
    navigation.replace("Signup");
  };

  const moveToForgotScreen = () => {
    navigation.replace("Forgot");
  };

  return (

   <View style={StyleCss.container}>

      <Image
        style={StyleCss.image}
        source={require('../../assets/login_logo.png')}
      />

      <View style={StyleCss.card_wrapper_bg}>

        <View style={StyleCss.card_margin}>

          <Text style={StyleCss.test_heading_style}> Sign In </Text>

          <View style={StyleCss.inputContainer}>
            <Image
              style={StyleCss.icon}
              source={require('../../assets/email_icon.png')}
            />
            <TextInput
              style={StyleCss.textInput}
              placeholder="Email/Phone"
              placeholderTextColor="rgba(51, 51, 51, 1)" />
          </View>

          <View style={StyleCss.inputContainer}>
            <Image
              style={StyleCss.icon}
              source={require('../../assets/pass_icon.png')}
            />
            <TextInput
              style={StyleCss.textInput}
              placeholder="Password"
              secureTextEntry={true} // Mask input for passwords
              placeholderTextColor="rgba(51, 51, 51, 1)" />
            <Image
              style={StyleCss.passIcon}
              source={require('../../assets/pass_show.png')}
            />
          </View>

          <View style={StyleCss.checkboxContainer}>
            <TouchableOpacity style={StyleCss.rememberMeContainer} onPress={handleCheck}>
              {/* Check/Uncheck Icon */}
              <Image
                style={StyleCss.checkIcon}
                source={
                  isChecked
                    ? require('../../assets/check_box.png')
                    : require('../../assets/uncheck_box.png')
                }
              />
              {/* Remember Me Text */}
              <Text style={StyleCss.commonText}>Remember me</Text>
            </TouchableOpacity>
            {/* Forgot Password */}
            <TouchableOpacity style={StyleCss.forgotPasswordContainer}>
              <Text style={StyleCss.commonText} onPress={moveToForgotScreen} >Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={StyleCss.buttonContainer}>
            <LinearGradient
              colors={['rgba(15, 135, 205, 1)', 'rgba(26, 105, 180, 1)', 'rgba(38, 75, 155, 1)']} // Gradient colors
              style={StyleCss.gradient}
              start={{ x: 0, y: 0 }} // Start point (top-left)
              end={{ x: 1, y: 1 }}   // End point (bottom-right)
            >
              <Text style={StyleCss.text}>Sign In</Text>
            </LinearGradient>
          </View>


          <View style={StyleCss.viewContainer}>
            <View style={StyleCss.viewStyle} />
            <Text style={StyleCss.commonText}>Or Sign In using </Text>
            <View style={StyleCss.viewStyle} />
          </View>


          <View style={StyleCss.gmailContainer}>
            <Image
              style={StyleCss.googleIcon}
              source={require('../../assets/google_icon.png')} />
          </View>


          <View style={StyleCss.signupTextContainer}>
            <Text style={StyleCss.commonText}>Don’t have an account?</Text>
            <TouchableOpacity>
              <Text style={StyleCss.signupText} onPress={moveToSignUpScreen} >Sign Up</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
    </View>
  );
};

export default Index;