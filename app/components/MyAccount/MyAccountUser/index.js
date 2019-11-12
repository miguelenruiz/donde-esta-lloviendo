import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import UserInfo from "./UserInfo";

export default class MyAccountUser extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <View>
        <UserInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
