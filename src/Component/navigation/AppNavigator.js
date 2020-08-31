import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  Home as HomeScreen,
  PageOne,
  PageTwo,
  PageThree,
  PageFour,
  ForgotPassword,
  Login,
  SharePage,
} from "../Screen";
import { UserContext } from "../InitialPage";

const StackAuth = createStackNavigator();
const StackHome = createStackNavigator();
const StackApp = createStackNavigator();
const Tab = createBottomTabNavigator();

const linking = {
  prefixes: ["https://mychat.com", "mychat://"],
  config: {
    screens: {
      AppStack: "/AppStack",
      PageOne: "/PageOne",
      PageTwo: "/PageTwo",
      PageThree: "/PageThree",
      PageFour: "/PageFour",
      ForgotPassword: "/ForgotPassword",
      Login: "/Login",
    },
  },
};

function AuthNavigator() {
  return (
    <StackAuth.Navigator initialRouteName="Login">
      <StackAuth.Screen name={"Login"} component={Login} />
      <StackAuth.Screen name={"ForgotPassword"} component={ForgotPassword} />
    </StackAuth.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="PageOne" component={PageOne} />
      <Tab.Screen name="PageTwo" component={PageTwo} />
      <Tab.Screen name="PageThree" component={PageThree} />
    </Tab.Navigator>
  );
}

function HomeNavigator() {
  return (
    <StackHome.Navigator>
      <StackHome.Screen name={"Home"} component={TabNavigator} />
      <StackHome.Screen name={"PageFour"} component={PageFour} />
      <StackHome.Screen name={"SharePage"} component={SharePage} />
    </StackHome.Navigator>
  );
}

function AppSwitchNavigator() {
  const authContext = useContext(UserContext);
  console.log(authContext, "authContext");
  return (
    <NavigationContainer linking={linking}>
      <StackApp.Navigator>
        {!authContext.isAuth ? (
          <StackApp.Screen name={"AuthStack"} component={AuthNavigator} />
        ) : (
          <StackApp.Screen name={"AppStack"} component={HomeNavigator} />
        )}
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

export { AppSwitchNavigator };
