import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import Home from './pages/home';
import Login from './pages/login';

const Stack = createStackNavigator();

function Routes() {
 return (
  <>
      
      <Stack.Navigator>
      {/* initialRouteName="Home"
              screenOptions={{
                header: CustomNavigationBar,
              }} */}
        <Stack.Screen 
          name="Home" component={Home}
            options={() => {
              return {
                  headerShown: false
              }

          }}
        />
        <Stack.Screen 
          name="Login" component={Login}
            options={() => {
              return {
                  headerShown: false
              }
          }}
        />
      </Stack.Navigator>
      </>
  );
}
export default Routes;