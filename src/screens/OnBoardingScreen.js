import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("DrawerNavigator")}
      onDone={() => navigation.replace("DrawerNavigator")}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../../assets/favicon.png')} />,
          title: 'Welcome',
          subtitle: 'Your guide to an amazing experience',
        },
        {
          backgroundColor: '#999',
          image: <Image source={require('../../assets/splash.png')} />,
          title: 'Stay Connected',
          subtitle: 'Stay connected with your friends and family.',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
