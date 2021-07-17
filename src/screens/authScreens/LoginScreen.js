import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { InputsSingIn } from "../../component/loginComponent/InputsSignIn";
import { SignInButton } from "../../component/loginComponent/SignInButton";
import { TouchableOpacity } from "react-native-gesture-handler";

export const LoginScreen = ({ navigation }) => {
  const [loginData, setLoginData] = React.useState({
    login: "",
    password: "",
  });

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require("../../../assets/img/bg.png")}
    >
      <View style={styles.headerBox}>
        <Text style={styles.textWelcome}>Welcome,</Text>
        <Text style={styles.textSign}>Sign in to continue</Text>
      </View>

      <InputsSingIn loginData={loginData} setLoginData={setLoginData} />

      <SignInButton loginData={loginData} navigation={navigation} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.version}>Version 0.5</Text>
      </View>
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
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 20,
    marginLeft: 30,
  },
  footerText: {
    color: "#9C9C9C",
    marginRight: 10,
  },
  textSignUp: {
    color: "#0063E0",
  },
  version: {
    color: "#9C9C9C",
    marginLeft: 70,
  },
});
