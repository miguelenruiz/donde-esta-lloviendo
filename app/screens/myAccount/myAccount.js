import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class Account extends Component {
  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen);
  };
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Aqui se mostrara el perfil de usuario </Text>
        <Button title="Registro" onPress={() => this.goToScreen("Register")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
