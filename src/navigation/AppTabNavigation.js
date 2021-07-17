import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { BetsScreen } from "../screens/betsScreens/BetsScreen";
import { MyBetsScreen } from "../screens/myBetsScreen/MyBetsScreen";
import { CryptoScreen } from "../screens/betsScreens/cryptoScreen/CryptoScreen";
import { CurrencyScreen } from "../screens/betsScreens/currencyScreen/CurrencyScreen";
import { ResourcesScreen } from "../screens/betsScreens/resourcesScreen/ResourcesScreen";
import { StocksScreen } from "../screens/betsScreens/stockScreen/StocksScreen";
import money from "../../assets/money.png";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";
import { MoreScreen } from "../screens/MoreScreen/MoreScreen";

const BetsStack = createStackNavigator(
  {
    Bets: BetsScreen,
    Crypto: { screen: CryptoScreen },
    Currency: { screen: CurrencyScreen },
    Resources: { screen: ResourcesScreen },
    Stock: { screen: StocksScreen },
  },
  {
    headerMode: "none",
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Bets: {
      screen: BetsStack,
      initial: true,
      navigationOptions: {
        title: "Betting",
        tabBarIcon: () => (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/bitcoin.png")}
          />
        ),
      },
    },
    MyBets: {
      screen: MyBetsScreen,
      navigationOptions: {
        title: "My Bets",
        tabBarIcon: () => (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/money.png")}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      initial: true,
      navigationOptions: {
        title: "Profile",
        tabBarIcon: () => (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/business.png")}
          />
        ),
      },
    },
    More: {
      screen: MoreScreen,
      initial: true,
      navigationOptions: {
        title: "More",
        tabBarIcon: () => (
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../assets/more.png")}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#141E30",
      inactiveBackgroundColor: "#141E30",
      activeTintColor: "#0063E0",
      inactiveTintColor: "#FFFF",
      style: { borderTopWidth: 0 },
      tabStyle: {
        padding: 0,
        width: "100%",
        maxHeight: "100%",
        borderTopWidth: 0,
      },
      showIcon: true,
    },
  }
);

export const AppTabNavigation = createAppContainer(BottomNavigator);
