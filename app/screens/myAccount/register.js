import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-elements";
import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/registro";

export default class Account extends Component {
  constructor() {
    super();

    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      }
    };
  }
  register = () => {
    // validacion de las contraseñas  deben ser iguales
    const { password, passwordConfirmation } = this.state.formData;
    if (password == passwordConfirmation) {
      const validate = this.refs.RegisterForm.getValue();
      if (validate) {
        console.log("formulario correcto");
      } else {
        console.log("form invalido");
      }
    } else {
      console.log("las contraseñas no son iguales perrito");
    }

    console.log(this.state.formData);
  };

  onChageFormRegister = formValue => {
    this.setState({
      formData: formValue
    });
  };

  render() {
    const { registerStruct, registerOptions } = this.state;
    return (
      <View style={styles.viewBody}>
        <Form
          ref="RegisterForm"
          type={registerStruct}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChageFormRegister(formValue)}
        />
        <Button title="Registrarme" onPress={() => this.register()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 40,
    marginRight: 40
  }
});
