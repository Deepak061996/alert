import React, { useEffect } from 'react'; // Include React in the import
import { View, Image, Alert } from 'react-native';
import StyleCss from '../SplashScreen/StyleCss';
import { useNavigation } from '@react-navigation/native';

const Index = () => {

    const navigation = useNavigation();

    
    // Function to show an alert
    const handleButtonPress = () => {
        navigation.replace("Login");
        // Alert.alert('Notification', 'Button clicked!');
    };

    // Trigger the alert after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            handleButtonPress();
        }, 3000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={StyleCss.container}>
          <Image
          style={StyleCss.image}
          source={require('../../assets/splash_logo.png')}/>
        </View>
    );
};

export default Index;
