import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const SharePage = () => {
  const shareUrl = "http://github.com";
  const title = "GitHub";

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Share Example!</Text>
      <WhatsappShareButton
        url={shareUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TelegramShareButton
        url={shareUrl}
        title={title}
        className="Demo__some-network__share-button"
      >
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      <EmailShareButton
        url={shareUrl}
        subject={title}
        body="body"
        separator=" "
        className="Demo__some-network__share-button"
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
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
