import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/registro";

export default class Account extends Component {
  constructor() {
    super();

    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions
    };
  }
  render() {
    const { registerStruct, registerOptions } = this.state;
    return (
      <View style={styles.viewBody}>
        <Text>Register screen .. </Text>
        <Form
          ref="RegisterForm"
          type={registerStruct}
          options={registerOptions}
        />
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
