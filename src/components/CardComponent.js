import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';

const CardComponent = ({ imageUrl, title, onPress }) => {
const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={globalStyles.cardContainer}>
        <ImageBackground 
          source={{ uri: imageUrl }} 
          style={globalStyles.cardImage}
        >
          <View style={globalStyles.cardOverlay}>
            <Text style={globalStyles.cardTitle}>{title}</Text>
          </View>
        </ImageBackground>
      </Card>
    </TouchableOpacity>
  );
};

export default CardComponent;
