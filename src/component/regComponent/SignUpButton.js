import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";

export const SignUpButton = ({ registrationData, navigation }) => {
  const url = "http://traidy-game.com/users/registerUser";

  const registrationPost = () => {
    if (registrationData.login.lenght === 0) {
      Alert.alert("Login mast have min 5 charters");
      return;
    }

    if (registrationData.password.lenght === 0) {
      Alert.alert("Password mast have min 5 charters");
      return;
    }

    if (registrationData.password.username === 0) {
      Alert.alert("Password mast have min 5 charters");
      return;
    }

    axios
      .post(url, {
        login: registrationData.login,
        password: registrationData.password,
        username: registrationData.username,
      })
      .then(({ data }) => {
        if (data.success === 0) {
          navigation.navigate("Login");
        } else {
          Alert.alert("Such user exists");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={registrationPost} style={styles.button}>
        <Text style={styles.text}>Sign up</Text>
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
