import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './home/Homepage'
import HeadText from './screens/HeadText'
import Info from './screens/Info'
import Pages from './screens/Pages'
import Page from './screens/Page';
import Settings from './screens/Settings'

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="home" component={Homepage} />
        <Stack.Screen options={{ title: 'geri' }} name="head" component={HeadText} />
        <Stack.Screen name="info" component={Info} />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name='pages' component={Pages} />
        <Stack.Screen name='page' component={Page} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
