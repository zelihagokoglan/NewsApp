import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/globalStyles';
import colors from '../styles/colors';

const ButtonComponent = ({ category, onPress, isActive }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginHorizontal: 5 }}>
      <LinearGradient
        colors={isActive ? [colors.avgGray, colors.avgGray] : [colors.black, colors.black]}
        start={{ x: 0, y: 0 }}  
        end={{ x: 1, y: 1 }}
        style={[
          globalStyles.button,
          { borderColor: isActive ? colors.black : colors.black },
        ]}
      >
        <Text
          style={[
            globalStyles.buttonText,
            { color: isActive ? colors.black : colors.white },
          ]}
        >
          {category}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
