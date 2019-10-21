import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button } from "react-native-elements";
import { Assets } from "react-navigation-stack";
import t from "tcomb-form-native";
import { LoginStruct, LoginOptions } from "../../forms/login";

const Form = t.form.Form;
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      LoginStruct: LoginStruct,
      LoginOptions: LoginOptions
    };
  }
  render() {
    const { LoginStruct, LoginOptions } = this.state;
    return (
      <View style={styles.ViewBody}>
        <Image
          source={require("../../../assets/img/login-icon-png-0.jpg")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.ViewForm}>
          {/* /* se crea el formulario de login  */}
          <Form
            ref="loginForm"
            type={LoginStruct}
            options={LoginOptions}
          ></Form>
          <Button ButtonStyle={styles.ViewButton} title="login"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  },
  ViewButton: {
    backgroundColor: "#08088A",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: "center"
  },
  ViewForm: {
    marginTop: 50
  },
  containerLogo: {
    alignItems: "center"
  }
});
