import React, { useEffect } from "react";
import { View } from "react-native";
import InitialPage from "./Component/InitialPage";
import { askForPermissionToReceiveNotifications } from "./Firebase";

function App() {
  useEffect(() => askForPermissionToReceiveNotifications(), []);
  return (
    <View style={{ backgroundColor: "#890" }}>
      <InitialPage />
    </View>
  );
}

export default App;
