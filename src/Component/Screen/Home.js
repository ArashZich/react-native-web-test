import React from "react";
import { View, Text, Button } from "react-native-web";

const Home = ({ navigation }) => {
  const handlePageFour = () => {
    navigation.navigate("PageFour");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>This is Home Screen!</Text>
      <Button onPress={handlePageFour} title="Page Four" />
    </View>
  );
};

export default Home;
