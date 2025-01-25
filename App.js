import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './home/Homepage'
import HeadText from './screens/HeadText'
import Info from './screens/Info'
import Pages from './screens/Pages'
import Page from './screens/Page';
import Settings from './screens/Settings'
import Epilog from './screens/Epilog';

const Stack = createNativeStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen options={{ headerShown: false }} name="home" component={Homepage} />
        <Stack.Screen options={{ title: 'Ön Söz' }} name="head" component={HeadText} />
        <Stack.Screen options={{ title: 'Müəllif Haqqında' }} name="info" component={Info} />
        <Stack.Screen options={{ title: 'Sazlamalar' }} name="settings" component={Settings} />
        <Stack.Screen options={{ title: 'Mündəricat' }} name='pages' component={Pages} />
        <Stack.Screen name='content' options={{ title: 'Epiloq' }} component={Epilog} />
        <Stack.Screen options={{ headerShown: false }} name='page' component={Page} />

      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default App;
