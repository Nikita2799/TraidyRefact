import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { BetsScreen } from "../screens/betsScreens/BetsScreen";
import { MyBetsScreen } from "../screens/myBetsScreen/MyBetsScreen";
import { CryptoScreen } from "../screens/betsScreens/cryptoScreen/CryptoScreen";
import { CurrencyScreen } from "../screens/betsScreens/currencyScreen/CurrencyScreen";
import { ResourcesScreen } from "../screens/betsScreens/resourcesScreen/ResourcesScreen";
import { StocksScreen } from "../screens/betsScreens/stockScreen/StocksScreen";

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
      initial: true
    },
    MyBets: {
      screen: MyBetsScreen,
      navigationOptions:{
        title:'My Invets'
      }
    },
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#141E30",
      inactiveBackgroundColor: "#133C71",
      activeTintColor: "#0063E0",
      tabStyle: {
        paddingBottom: 10,
      },
    },
  }
);

export const AppTabNavigation = createAppContainer(BottomNavigator);
