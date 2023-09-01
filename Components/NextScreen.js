import { StyleSheet, View, Animated } from 'react-native';
import { useState } from "react";

const NextScreen = ({navigation}) => {

  const [border, setBorder] = useState(0)
  const scaleValue = new Animated.Value(0.8);
  
  const handlePress = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home');
    });
    setBorder(32)
  };

  return (
    <Animated.View style={{
      transform: [{ scale: scaleValue }],
      backgroundColor:'#90EE90',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
    }} onStartShouldSetResponder={handlePress }>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#90EE90',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NextScreen;