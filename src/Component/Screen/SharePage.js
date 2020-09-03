import React, { useCallback, useState, useRef, useEffect } from "react";
import { StyleSheet, Text, Button, View, AppState } from "react-native";
import { Linking, Platform } from "react-native";

const SharePage = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const telegramId = "ArashZich";
  const mail = "zenith.arash@gmail.com";
  const txtTest = "Hello";
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  const onSendSMSMessage = useCallback(async (phoneNumber, message) => {
    const separator = Platform.OS === "ios" ? "&" : "?";
    const url = `sms:${phoneNumber}${separator}body=${message}`;
    await Linking.openURL(url);
  }, []);

  const toggle = useCallback((item) => {
    setIsActive(item);
  }, []);

  const handleCall = () => {
    let phone = "1222222";
    Linking.openURL(`tel:${phone}`);
    _handleAppStateChange();
  };

  const _handleAppStateChange = (nextAppState) => {
    if (nextAppState === "inactive" || nextAppState === "background") {
      toggle(true);
    } else {
      toggle(false);
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  useEffect(() => {
    let interval = null;
    // AppState.addEventListener("change", _handleAppStateChange);
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, [isActive, seconds]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Share Example!</Text>
      <Text style={styles.welcome}>{seconds}</Text>
      <Text style={styles.welcome}>{appStateVisible}</Text>
      <Button onPress={toggle} title={isActive ? "Pause" : "Start"} />

      <Button
        onPress={() => Linking.openURL(`https://t.me/${telegramId}`)}
        title="Telegram"
      />
      <Button onPress={() => Linking.openURL(`mailto:${mail}`)} title="Mail" />
      <Button
        onPress={() => Linking.openURL(`whatsapp://send?text=${txtTest}`)}
        title="Send WhatsApp"
      />
      <Button
        onPress={() => onSendSMSMessage("2345555", "TEST")}
        title="Send message"
      />
      <Button onPress={() => handleCall()} title="Call" />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  textInput: {
    borderBottomColor: "#151313",
    borderBottomWidth: 1,
    marginRight: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  resultTitle: {
    marginTop: 20,
    fontSize: 20,
  },
  result: {
    fontSize: 14,
    margin: 10,
  },
  optionsRow: {
    justifyContent: "space-between",
  },
  withInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default SharePage;
