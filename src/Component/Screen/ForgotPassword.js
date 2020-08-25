import React from "react";
import { View, Text, Button } from "react-native-web";

const ForgotPassword = ({ navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>
        This is ForgotPassword Screen!
      </Text>
      <Button onPress={handleBack} title="Back" />
    </View>
  );
};

export default ForgotPassword;
