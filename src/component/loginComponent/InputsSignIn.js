import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export const InputsSingIn = ({ loginData, setLoginData }) => {
  const changeLogin = (e) => {
    let event = e.nativeEvent.text;

    if (event.match(/^\w+$/) || event == "") {
      setLoginData((prev) => ({
        ...prev,
        login: event,
      }));
    }
  };

  const changePassword = (e) => {
    let event = e.nativeEvent.text;

    if (event.match(/^\w+$/) || event == "") {
      setLoginData((prev) => ({
        ...prev,
        password: event,
      }));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          value={loginData.login}
          style={styles.input}
          onChange={changeLogin}
        />

        <Text style={styles.textPassword}> Password </Text>
        <TextInput
          style={styles.input}
          value={loginData.password}
          onChange={changePassword}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    minWidth: "80%",
    minHeight: 35,
    borderWidth: 0.5,
    borderColor: "#9C9C9C",
    backgroundColor: "#003A94",
    borderRadius: 5,
    paddingStart: 20,
    color: "#FFFF",
    fontFamily: "open-light",
    fontSize: 15,
  },
  text: {
    color: "#FFFF",
    fontFamily: "open-light",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 250,
  },
  textPassword: {
    color: "#FFFF",
    fontFamily: "open-light",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 225,
  },
});
