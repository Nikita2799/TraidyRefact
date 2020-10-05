import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  AsyncStorage,
} from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";

export const SignInButton = ({ loginData, navigation }) => {
  const url = "http://traidy-game.com/users/loginUser";

  const { signIn } = React.useContext(AuthContext);

  const setId = async (data) => {
    try {
      await AsyncStorage.setItem("trId", data);
    } catch (error) {
      console.log(error);
    }
  };
  const loginPost = () => {
    if (loginData.login.lenght === 0) {
      Alert.alert("Login mast have min 5 charters");
      return;
    }

    if (loginData.password.lenght === 0) {
      Alert.alert("Password mast have min 5 charters");
      return;
    }

    axios
      .post(url, {
        login: loginData.login,
        password: loginData.password,
      })
      .then(({ data }) => {
        if (data.success === 0) {
          setId(data.traidy_id);
          signIn();
        } else {
          Alert.alert("Incorrect login or password ");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={loginPost} style={styles.button}>
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "20%",
    backgroundColor: "#0063E0",
    borderRadius: 5,
  },
  text: {
    color: "#FFFF",
  },
});
