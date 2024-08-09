import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { Text, TouchableOpacity } from 'react-native';

const OnBoardingScreen = ({ navigation }) => {
  const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
      <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
  );
  return (
    <Onboarding
      onDone={() => navigation.replace("TabNavigator")}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <LottieView
              source={require('../../assets/newspaper.json')}
              autoPlay
              loop
              style={{ width: 300, height: 300 }}
            />
          ),
          title:"Welcome..",
          subtitle: "Discover stories that shape your world.",
        },
        
      ]}
    />
  );
};

export default OnBoardingScreen;
