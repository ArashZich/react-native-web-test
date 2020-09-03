import React, { useState } from "react";
import { View, Text, Button } from "react-native-web";
import axios from "axios";

const Home = ({ navigation }) => {
  const [state, setState] = useState({});
  const [list, setList] = useState([]);

  axios.interceptors.request.use(function (config) {
    const token = "";
    config.headers = {
      Authorization: token,
    };

    return config;
  });
  const getToken = () => {
    axios({
      method: "post",
      // url: "http://crmapi.cobeldarou.com/api/Token",
      url: "https://simpleapi.abidipharma.com/api/Token",
      data: {
        UserName: "",
        Password: "",
      },
    })
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  };

  const getPerson = () => {
    axios({
      method: "get",
      url: "https://simpleapi.abidipharma.com/api/Person",
    })
      .then((res) => setList(res.data))
      .catch((err) => console.log(err));
  };

  const handlePageFour = () => {
    navigation.navigate("PageFour");
  };
  const handleSharePage = () => {
    navigation.navigate("SharePage");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ textAlign: "center" }}>This is Home Screen!</Text>
      <Button onPress={handlePageFour} title="Page Four" />
      <Button onPress={handleSharePage} title="Share Page" />
      <Button onPress={getToken} title="Token" />
      <Button onPress={getPerson} title="Person" />
      <Text style={{ textAlign: "center", fontSize: 10 }}>{state.Token}</Text>
      {list &&
        list.map((item, ind) => {
          return (
            <Text key={ind} style={{ textAlign: "center", fontSize: 10 }}>
              {item.label}
            </Text>
          );
        })}
    </View>
  );
};

export default Home;
