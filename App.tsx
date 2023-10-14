import React from "react";
import CounterPage from "./src/pages/CounterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./src/pages/LoginPage";

const stack = createStackNavigator();

const App = () =>{
 return(
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Counter" component={CounterPage}/>
      <stack.Screen name="Login" component={LoginPage}/>
    </stack.Navigator>
  </NavigationContainer>
 )
}

export default App;