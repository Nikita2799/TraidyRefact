import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { LoginScreen } from "../screens/authScreens/LoginScreen";
import { RegistrationScreen } from "../screens/authScreens/RegistrationScreen";

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Registration: {
      screen: RegistrationScreen,
    },
  },
  {
    headerMode: "none",
  }
);

export const AuthNavigation = createAppContainer(AuthStack);
