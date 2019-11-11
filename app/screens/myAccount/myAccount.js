import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import * as fireBase from "firebase";
import  MyAccountGuest  from "../../components/MyAccount/MyAccountGuest";

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    };
  }
  async componentDidMount() {
    await fireBase.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({
          login: true
        });
      } else {
        this.setState({
          login: false
        });
      }
    });
  }
  goToScreen = nameScreen => {
    this.props.navigation.navigate(nameScreen);
  };

  logout = () => {
    // console.log("Cerrando sesion");
    fireBase.auth().signOut();
  };
  render() {
    const { login } = this.state;

    if (login) {
      return (
        <View style={styles.viewBody}>
          <Text>Estas logeado perro </Text>
          <Button title="Cerrar Sesion" onPress={() => this.logout()} />
        </View>
      );
    } else {
      return (
        <MyAccountGuest  goToScreen ={this.goToScreen}/>
        // <View style={styles.viewBody}>
        //   <Button
        //     title="Registro"
        //     onPress={() => this.goToScreen("Registro")}
        //   />
        //   <Button title="Login" onPress={() => this.goToScreen("Login")} />
        // </View>
      );
    }
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
