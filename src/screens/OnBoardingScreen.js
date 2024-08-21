import React from 'react';
import { View, Text, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import globalStyles from '../styles/globalStyles';
import { colors } from 'react-native-elements';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('TabNavigator')}
      onDone={() => navigation.replace('TabNavigator')}
      pages={[
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require('../../assets/onbPage1.jpg')} 
              style={globalStyles.onBiMage}
            />
          ),
          title: '',
          subtitle: (
            <View style={globalStyles.onBtextContainer}>
              <Text style={globalStyles.onBtext}>
                Haberlerin en güncel ve güvenilir kaynağına hoş geldiniz! Gündemden spora, politikadan teknolojiye kadar tüm haberleri tek bir uygulamada takip edin.
              </Text>
            </View>
          ),
        },
        {
          backgroundColor: colors.white,
          image: (
            <Image
              source={require('../../assets/onbPage2.jpg')} 
              style={globalStyles.onBiMage}
            />
          ),
          title: '',
          subtitle: (
            <View style={globalStyles.onBtextContainer}>
              <Text style={globalStyles.onBtext}>
                Kendi favori haberlerinizi ekleyin ve kolayca erişin!
              </Text>
            </View>
          ),
        },
      ]}
      skipLabel="Skip"
      nextLabel="Next"
      doneLabel="Done"
    />
  );
};


export default OnboardingScreen;
