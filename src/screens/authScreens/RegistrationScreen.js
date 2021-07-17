import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { InputsSingUp } from "../../component/regComponent/InputSignUp";
import { SignUpButton } from "../../component/regComponent/SignUpButton";

export const RegistrationScreen = ({ navigation }) => {
  const [registrationData, setRegistrationData] = React.useState({
    login: "",
    password: "",
    username: "",
    codeReg: "",
  });

  const onBackHandler = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require("../../../assets/img/bg.png")}
    >
      {Platform.OS === "android" ? (
        <TouchableOpacity style={styles.cross} onPress={onBackHandler}>
          <Entypo size={24} name="cross" color="#FFFF" />
        </TouchableOpacity>
      ) : null}

      <View style={styles.headerBox}>
        <Text style={styles.textWelcome}>Sign up,</Text>
        <Text style={styles.textSign}>Sign up to start</Text>
      </View>
      <InputsSingUp
        registrationData={registrationData}
        setRegistrationData={setRegistrationData}
      />
      <SignUpButton
        navigation={navigation}
        registrationData={registrationData}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  headerBox: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    height: "20%",
    justifyContent: "flex-end",
  },
  textWelcome: {
    color: "#ffff",
    fontSize: 36,
    fontFamily: "open-light",
  },
  textSign: {
    color: "#9C9C9C",
    fontSize: 23,
    fontFamily: "open-light",
  },
  cross: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 10,
    position: "absolute",
  },
});
