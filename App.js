import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import OnBoarding from "./src/screens/OnBoarding/index"
import First from "./src/screens/First/index"
import Second from "./src/screens/Second/index"





const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Main} />
        <Tab.Screen name="Second" component={Second} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator();
const Main = () => {
  const [firstLaunch, setFirstLaunch] = useState(null)
  useEffect(() => {

    AsyncStorage.getItem("alreadyLaunched").then(value=>{
      if(value==null){
        AsyncStorage.setItem("alreadyLaunched","true")
        setFirstLaunch(true)
      }else{
        setFirstLaunch(false)
      }
    })
  }, [])
  if(firstLaunch===null){
    return null
  }else if(firstLaunch===true){
   routeName ="OnBoard"
  }else{
   routeName="First"
  }


return(

  <Stack.Navigator options={{headerShown:true}} initialRouteName={routeName}>
    <Stack.Screen name={"OnBoard"} component={OnBoarding}  options={{ headerShown: false }}/>
    <Stack.Screen name={"First"} component={First}  options={{ title: 'First' ,headerShown: false}}/>
  
  </Stack.Navigator>

)
}
