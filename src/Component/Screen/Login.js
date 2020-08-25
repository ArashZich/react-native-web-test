import React from "react";
import { View, Text, Button } from "react-native-web";

import AsyncStorage from "@react-native-community/async-storage";

const Login = ({ navigation }) => {
  const setToken = async (token) => {
    try {
      await AsyncStorage.setItem("@Token", token);
    } catch (e) {
      console.log(e, "error set token");
    }
  };

  const handleLogin = () => {
    console.log("aaaa");
    setToken("1234");
    navigation.navigate("AppStack");
  };
  const handleForgot = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}
    >
      <Text>Login Page</Text>
      <Button onPress={handleLogin} title="Login" />
      <Button onPress={handleForgot} title="ForgotPassword" />
    </View>
  );
};

export default Login;
