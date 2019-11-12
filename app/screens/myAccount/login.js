import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button, Divider, SocialIcon } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import t from "tcomb-form-native";
import { Assets } from "react-navigation-stack";

import { LoginStruct, LoginOptions } from "../../forms/login";
import { validate } from "tcomb-validation";

import { facebookApi } from "../../utils/social";
import { Expo } from "expo";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

const Form = t.form.Form;
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      LoginStruct: LoginStruct,
      LoginOptions: LoginOptions,
      LoginData: {
        email: "",
        password: ""
      },
      loginErrorMessage: ""
    };
  }

  login = formValue => {
    const validate = this.refs.loginForm.getValue();

    if (!validate) {
      this.setState({
        loginErrorMessage: "Escribio algo mal "
      });
    } else {
      this.setState({
        loginErrorMessage: " "
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(validate.email, validate.password)
        .then(() => {
          this.refs.toasLogin.show("Login correcto socio ", 200, () => {
            this.props.navigation.goBack();
          });
        })
        .catch(() => {
          this.refs.toasLogin.show("Login Incorrecto ", 2500);
        });
    }
  };

  // permite login con facebook
  loginFacebook = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      facebookApi.aplication_id,
      { permissions: facebookApi.permissions }
    );
  };

  onChangeFormLogin = formValue => {
    this.setState({
      LoginData: formValue
    });
  };
  render() {
    const { LoginStruct, LoginOptions, loginErrorMessage } = this.state;
    return (
      <View style={styles.ViewBody}>
        {/* imagen de login inicio de sesion */}
        <Image
          source={require("../../../assets/img/login-icon-png-0.jpg")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.ViewForm}>
          <Form
            ref="loginForm"
            type={LoginStruct}
            options={LoginOptions}
            value={this.state.LoginData}
            onChange={formValue => this.onChangeFormLogin(formValue)}
          ></Form>
          <Button
            ButtonStyle={styles.ViewButton}
            onPress={() => this.login()}
            title="login"
          ></Button>

          <Text style={styles.TextRegistro}>
            Aun no tienes una cuenta ?{" "}
            <Text
              style={styles.btnRegister}
              onPress={() => this.props.navigation.navigate("Registro")}
            >
              Registrate
            </Text>
          </Text>

          <Divider style={styles.Divider} />

          <SocialIcon
            title="Iniciar sesion con Facebook"
            button
            type="facebook"
            onPress={() => this.loginFacebook()}
          />

          <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>
        </View>
        <Toast
          ref="toasLogin"
          position="bottom"
          positionValue={400}
          fadeInDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30
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
  },
  loginErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20
  },
  Divider: {
    backgroundColor: "#08088A",
    marginBottom: 20
  }
});
