import React, { useState, useEffect } from "react";
import { AppSwitchNavigator } from "./navigation/AppNavigator";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Dimensions } from "react-native";

export const UserContext = React.createContext();

function InitialPage() {
  const [isAuth, setIsAuth] = useState(false);

  const getToken = async () => {
    const token = await AsyncStorage.getItem("@Token");
    if (token && token.length > 0) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    getToken();
  }, [isAuth]);

  return (
    <View style={{ height: Dimensions.get("window").height }}>
      <UserContext.Provider value={{ isAuth: isAuth }}>
        <AppSwitchNavigator />
      </UserContext.Provider>
    </View>
  );
}

export default InitialPage;
