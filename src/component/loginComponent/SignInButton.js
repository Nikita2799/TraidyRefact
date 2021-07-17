import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import { AuthContext } from "../../context";

export const SignInButton = ({ loginData, navigation }) => {
  //const url = " http://192.168.0.147/users/loginUser" ;
  const url = "http://traidy-game.com/users/loginUser";
  const { signIn } = React.useContext(AuthContext);

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
      .then(async (data) => {
        if (data.data.success === 0) {
          await AsyncStorage.setItem("trId", data.data.traidy_id);
          signIn();
          console.log(data.data);
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
    minWidth: "80%",
    minHeight: "5%",
    backgroundColor: "#0063E0",
    borderRadius: 5,
  },
  text: {
    color: "#FFFF",
  },
});
