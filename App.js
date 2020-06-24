
import * as React from 'react';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import{Home} from './Home';
import{Profile} from './Profile';
import{chitiet} from './chitiet';
const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        />
        <Stack.Screen name='Profile'
         component={Profile}/>
         <Stack.Screen name='chitiet'
         component={chitiet}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}