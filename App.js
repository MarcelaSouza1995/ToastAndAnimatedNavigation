import FirstPage from './Components/FirstPage';
import { NavigationContainer } from '@react-navigation/native';
import NextScreen from './Components/NextScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const options = {
  title:'',
  headerTransparent: true,
  headerShown:false
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={FirstPage} options={options}
        />
        <Stack.Screen name="Next" component={NextScreen} options={options}/>
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
