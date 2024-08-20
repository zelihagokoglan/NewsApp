import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import globalStyles from '../styles/globalStyles';

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('TabNavigator')}
      onDone={() => navigation.replace('TabNavigator')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/onbPage1.jpg')} // Kendi resim dosyanızı kullanın
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
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../assets/onbPage2.jpg')} // Kendi resim dosyanızı kullanın
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
