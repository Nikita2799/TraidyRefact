import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

export const InputsSingUp = ({ registrationData, setRegistrationData }) => {
  const changeLogin = (e) => {
    let event = e.nativeEvent.text;

    if (event.match(/^\w+$/) || event == "") {
      setRegistrationData((prev) => ({
        ...prev,
        login: event,
      }));
    }
  };

  const changePassword = (e) => {
    let event = e.nativeEvent.text;
    if (event.match(/^\w+$/) || event == "") {
      setRegistrationData((prev) => ({
        ...prev,
        password: event,
      }));
    }
  };

  const changeUsername = (e) => {
    let event = e.nativeEvent.text;
    if (event.match(/^\w+$/) || event == "") {
      setRegistrationData((prev) => ({
        ...prev,
        username: event,
      }));
    }
  };

  const changeBetaCode = (e) => {
    let event = e.nativeEvent.text;
    if (event.match(/^\w+$/) || event == "") {
      setRegistrationData((prev) => ({
        ...prev,
        codeReg: event,
      }));
    }
    console.log(registrationData);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.textLogin}>Login</Text>
        <TextInput
          value={registrationData.login}
          style={styles.input}
          onChange={changeLogin}
        />

        <Text style={styles.textPassword}> Password </Text>
        <TextInput
          style={styles.input}
          value={registrationData.password}
          onChange={changePassword}
        />
        <Text style={styles.text}> Username </Text>
        <TextInput
          style={styles.input}
          value={registrationData.username}
          onChange={changeUsername}
        />
        <Text style={styles.text}> Beta-code </Text>
        <TextInput
          style={styles.input}
          value={registrationData.codeReg}
          onChange={changeBetaCode}
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
    marginRight: 235,
  },
  textPassword: {
    color: "#FFFF",
    fontFamily: "open-light",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 240,
  },
  textLogin: {
    color: "#FFFF",
    fontFamily: "open-light",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 270,
  },
});
