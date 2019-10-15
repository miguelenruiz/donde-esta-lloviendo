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

const HomeScreenStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Home"
    })
  }
});

const SearchScreenStack = createStackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Busqueda"
    })
  }
});

const AccountScreenStack = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Mi perfil"
    })
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Registro"
    })
  }
});

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home"
            type="material-community"
            size={35}
            color={tintColor}
          />
        )
      })
    },

    Account: {
      screen: AccountScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Mi perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account"
            type="material-community"
            size={35}
            color={tintColor}
          />
        )
      })
    },
    Search: {
      screen: SearchScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Buscar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="cloud-search"
            type="material-community"
            size={35}
            color={tintColor}
          />
        )
      })
    }
  },

  {
    initialRouteName: "Account",
    order: ["Home", "Search", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);
export default createAppContainer(RootStack);
