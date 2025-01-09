import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styleCss from './StyleCss';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({ onPress, title = 'Submit', style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styleCss.buttonContainer}>
        <LinearGradient
          colors={['rgba(15, 135, 205, 1)', 'rgba(26, 105, 180, 1)', 'rgba(38, 75, 155, 1)']} // Gradient colors
          style={styleCss.gradient}
          start={{ x: 0, y: 0 }} // Start point (top-left)
          end={{ x: 1, y: 1 }}   // End point (bottom-right)
        >
          <Text style={styleCss.text}>{title}</Text>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
