import React, { useState } from "react";
import { View, Text, Button } from "react-native-web";
import axios from "axios";

const Home = ({ navigation }) => {
  const [state, setState] = useState({});
  const [list, setList] = useState([]);

  axios.interceptors.request.use(function (config) {
    const token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6InRoY29iMDg5NyIsIm5hbWVpZCI6Ijk0MCIsImdyb3Vwc2lkIjoiNTQwIiwiY2VydHNlcmlhbG51bWJlciI6ImFwdmFvLWJ3Nmk2LTluNHRqLWVkbnU4IiwibmJmIjoxNTk5MDMzODEyLCJleHAiOjE1OTkyOTMwMTIsImlhdCI6MTU5OTAzMzgxMn0.nPdeAvkLgZSBtULBgWDD0BzWBortEYVMpaPSzBVC9Y4";

    config.headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method",
      Authorization: token,
    };

    return config;
  });
  const getToken = () => {
    axios({
      method: "post",
      url: "http://crmapi.cobeldarou.com/api/Token",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      data: {
        UserName: "thcob0897",
        Password: "20151",
      },
    })
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  };

  const getPerson = () => {
    axios({
      method: "get",
      url: "http://crmapi.cobeldarou.com/api/Person",
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
