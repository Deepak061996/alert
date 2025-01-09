import React from 'react';
import CustomOTPInput from '../CustomComponent/CustomOtp/CustomOTPInput';
import { Alert } from 'react-native';

const OtpScreen = () => {
    const handleOTPSubmit = (otp) => {
        Alert.alert('OTP Entered', otp);
      };
      return <CustomOTPInput length={6} onSubmit={handleOTPSubmit} />;
};

export default OtpScreen;