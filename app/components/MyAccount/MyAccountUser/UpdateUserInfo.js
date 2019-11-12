import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOneInput from "../../elements/OverlayOneInput";

export default class UpdateUserInfo extends Component {
  constructor() {
    super();

    this.state = {
      menuItems: [
        {
          title: " Cambiar nombre ",
          iconType: "material-community",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "account-circle",
          iconColorLeft: "#ccc"
          //   onPress: () => console.log("clic en boton de cambiar nombre ")
        },
        {
          title: " Cambiar email ",
          iconType: "material-community",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "at",
          iconColorLeft: "#ccc"
          //   onPress: () => console.log("clic en boton de cambiar nombre ")
        },
        {
          title: " Cambiar contraseña ",
          iconType: "material-community",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "lock-reset",
          iconColorLeft: "#ccc"
          //   onPress: () => console.log("clic en boton de cambiar contraseña ")
        }
      ]
    };
  }
  render() {
    const { menuItems } = this.state;
    return (
      <View>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconNameLeft,
              color: item.iconColorLeft
            }}
            rightIcon={{
              type: item.iconType,
              name: item.iconNameRight,
              color: item.iconColorRight
            }}
            onPress={item.onPress}
            containerStyle={styles.contentCOntainerStyle}
          />
        ))}
        <OverlayOneInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentCOntainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3d3"
  }
});
