import React from "react";
import { Icon } from "react-native-elements";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// importar las vistas

import HomeScreen from "../screens/home";
import AccountScreen from "../screens/myAccount/myAccount";
import SearchScreen from "../screens/search";
import RegisterScreen from "../screens/myAccount/register";
import LoginScreen from "../screens/myAccount/login";

const HomeScreenStack = createStackNavigator({
  Inicio: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const SearchScreenStack = createStackNavigator({
  Buscar: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Busqueda"
    })
  }
});

const AccountScreenStack = createStackNavigator({
  Perfil: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi perfil"
    })
  },
  Registro: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  },

  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Login"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Inicio: {
      screen: HomeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="material-community"
            size={25}
            color={tintColor}
          />
        )
      })
    },

    Perfil: {
      screen: AccountScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account"
            type="material-community"
            size={25}
            color={tintColor}
          />
        )
      })
    },
    Buscar: {
      screen: SearchScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="cloud-search"
            type="material-community"
            size={25}
            color={tintColor}
          />
        )
      })
    }
  },

  {
    initialRouteName: "Perfil",
    order: ["Inicio", "Buscar", "Perfil"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#08088A"
    }
  }
);
export default createAppContainer(RootStack);
