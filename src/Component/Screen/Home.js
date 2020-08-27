import React from "react";
import { View, Text, Button } from "react-native-web";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

const Home = ({ navigation }) => {
  const handlePageFour = () => {
    navigation.navigate("PageFour");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>This is Home Screen!</Text>
      <Button onPress={handlePageFour} title="Page Four" />
      <FontAwesomeIcon name="pied-piper-alt" size={30} color="#010" />
      <EntypoIcon name="bug" size={30} />
    </View>
  );
};

export default Home;
