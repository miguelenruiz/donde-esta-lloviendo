import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

export default class MyAccounGuest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { goToScreen } = this.props;
    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/clima.png")}
          style={styles.image}
          placeholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />

        <Text style={styles.title}>Lorem Ipsum </Text>
        <Text style={styles.description}>
          {" "}
          ¿ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
          lorem auctor velit feugiat vehicula eu quis arcu. Nam porttitor rutrum
          libero, at tincidunt justo rutrum imperdiet. Pellentesque tincidunt ?
        </Text>

        <Button
          buttonStyle={styles.btnViewProfile}
          title="Ver tu perfil"
          onPress={() => goToScreen("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 150
  },

  image: {
    height: 300
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 20,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  btnViewProfile: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#00a680"
  }
});
