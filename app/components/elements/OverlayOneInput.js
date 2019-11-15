import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Overlay, Input, Button } from "react-native-elements";

export default class OverlayOneInput extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Overlay overlayStyle={styles.OverlayStyle} isVisible={false}>
        <View style={styles.viewOverlay}>
          <Input
            containerStyle={styles.inputContainer}
            placeholder="texto ..."
            onChange={value => console.log(value)}
            value=""
          />
          <Button buttonStyle={styles.buttonUpdate} title="Actualizar" />
        </View>
      </Overlay>
    );
  }
}

const styles = StyleSheet.create({
  OverlayStyle: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },
  viewOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#00a680",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  inputContainer: {
    marginBottom: 20
  },
  buttonUpdate: {
    backgroundColor: "#00a680"
  }
});
