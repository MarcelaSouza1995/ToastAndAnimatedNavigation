import { StyleSheet, Text, View,Button, Image, Animated} from 'react-native';
import Toast from 'react-native-toast-message';
import { useState } from "react";

//Configuracao toast
const toastConfig = {
  typeCustom: ({ text2 }) => (
    <View style={ styles.viewToast }>
      <Image
        style={styles.img}
        source={require('../lightbulb.png')}
      />
      <Text style={styles.text}>{text2}</Text>
    </View>
  )
};

export default FirstPage = ({ navigation }) => {

  const [border, setBorder] = useState(0)
  const scaleValue = new Animated.Value(1);
  
  const showToast = () => {
    Toast.show({
      type: 'typeCustom',
      text2: 'Text',
      position: 'bottom',
    });
  }

  const handlePress = () => {
    Animated.timing(scaleValue, {
      toValue: 0.8,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      navigation.navigate('Next');
    });
    setBorder(32)
  };

  return(
      <Animated.View style={{
        transform: [{ scale: scaleValue }],
        backgroundColor:'#D35656',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:border
      }
      
      } onStartShouldSetResponder={handlePress }>
          <Toast config={toastConfig} />
          <View style={styles.viewButton}>
          <Button
            title='Abrir Toast'
            onPress={showToast}
          />
        </View>
        </Animated.View>
  )
}

const styles = StyleSheet.create({
  viewButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width:150,
  },
  container: {
    backgroundColor:'red',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 24,
    height: 24,
  },
  text:{
    color:"#FFF",
    marginLeft:5,
    fontSize:14,
    width:300,
    fontFamily: 'Aeonik Pro',
    fontWeight: 500,
    height:24,
    },
  viewToast: { 
    backgroundColor: '#5E00A2',
    borderRadius: '18',
    padding: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    }
});
