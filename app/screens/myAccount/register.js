import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/registro";
import * as fireBase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";

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
      },
      formErrorMessaje: ""
    };
  }
  register = () => {
    // validacion de las contraseñas  deben ser iguales

    const { password, passwordConfirmation } = this.state.formData;
    if (password == passwordConfirmation) {
      const validate = this.refs.RegisterForm.getValue();
      if (validate) {
        this.setState({
          formErrorMessaje: ""
        });

        // registro con firebase
        fireBase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(resolve => {
            this.refs.toast.show("Registro exitoso", 500, () => {
              this.props.navigation.navigate("Account");
            });
          })
          .catch(err => {
            console.log("email ya existe ");
            this.refs.toast.show("El email ya esta en uso", 1500);
          });
      } else {
        this.setState({
          formErrorMessaje: "Formulario invalido"
        });
      }
    } else {
      this.setState({
        formErrorMessaje: "las contraseñas no son iguales"
      });
    }

    console.log(this.state.formData);
  };

  onChageFormRegister = formValue => {
    this.setState({
      formData: formValue
    });
  };

  render() {
    const { registerStruct, formErrorMessaje, registerOptions } = this.state;
    return (
      <View style={styles.viewBody}>
        <Form
          ref="RegisterForm"
          type={registerStruct}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChageFormRegister(formValue)}
        />
        <Button
          buttonStyle={styles.buttomRegisterContainer}
          title="Registrarme"
          onPress={() => this.register()}
        />

        <Text style={styles.formErrorMessaje}>{formErrorMessaje}</Text>
        <Toast
          ref="toast"
          style={{ backgroundColor: "black" }}
          position="bottom"
          positionValue={250}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.9}
          textStyle={{ color: "white" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff",
    marginLeft: 40,
    marginRight: 40,
    marginTop: 80
  },
  buttomRegisterContainer: {
    backgroundColor: "#08088A",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  formErrorMessaje: {
    color: "#DF0101",
    textAlign: "center",
    marginTop: 30
  }
});
