import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import StyleCss from '../SplashScreen/StyleCss';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigation]); // Add 'navigation' as a dependency to ensure effect runs correctly

  return (
    <View style={StyleCss.container}>
      <Image
        style={StyleCss.image}
        source={require('../../assets/splash_logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
