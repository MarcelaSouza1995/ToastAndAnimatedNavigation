import { StyleSheet, View, Animated } from 'react-native';
const NextScreen = ({navigation}) => {

  const scaleValue = new Animated.Value(0.8);
  
  const handlePress = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Home');
    });
  };

  return (
    <Animated.View style={{
      transform: [{ scale: scaleValue }],
      backgroundColor:'#90EE90',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32,
    }} onStartShouldSetResponder={handlePress}>
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