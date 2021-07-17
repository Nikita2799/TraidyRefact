import AsyncStorage from "@react-native-community/async-storage";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { MainHeader } from "../../component/header/MainHeader";
import { LinearGradient } from "expo-linear-gradient";
import { AlertSoon } from "../../ui/AlertSoon";
import { set } from "react-native-reanimated";
import { AuthContext } from "../../context";

export const MoreScreen = () => {
  const [visible, setVisible] = React.useState(false);
  const [state, setState] = useState({
    trId: "",
  });
  const { refreshing } = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem("trId")
      .then((id) => {
        setState((prev) => ({
          ...prev,
          trId: id,
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  const pressHandler = (e) => {
    setVisible(e);
  };

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require("../../../assets/img/bg.png")}
    >
      {state.trId ? <MainHeader refresh={true} trId={state.trId} /> : null}
      <AlertSoon visible={visible} onBack={() => pressHandler(false)} />
      <View style={styles.container}>
        {/* <LinearGradient
          style={styles.LinearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["90deg", "#0063E0", "#91C2FF"]}
        > */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(true)}
        >
          <Text style={styles.p}>Corporation mode</Text>
        </TouchableOpacity>
        {/* </LinearGradient> */}
        {/* <LinearGradient
          style={styles.LinearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["90deg", "#0063E0", "#91C2FF"]}
        > */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(true)}
        >
          <Text style={styles.p}>Start a company</Text>
        </TouchableOpacity>
        {/* </LinearGradient> */}
        {/* <LinearGradient
          style={styles.LinearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["90deg", "#0063E0", "#91C2FF"]}
        > */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(true)}
        >
          <Text style={styles.p}>Rating</Text>
        </TouchableOpacity>
        {/* </LinearGradient> */}
        {/* <LinearGradient
          style={styles.LinearGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={["90deg", "#0063E0", "#91C2FF"]}
        > */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => pressHandler(true)}
        >
          <Text style={styles.p}>Search</Text>
        </TouchableOpacity>
        {/* </LinearGradient> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    alignItems: "flex-end",
    //justifyContent: "space-between",
    marginVertical: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    padding: 10,
  },
  LinearGradient: {
    width: "70%",
    height: "1%",
    borderRadius: 8,
    margin: 2,
    //alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    width: "43%",
    height: "28%",
    borderRadius: 8,
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
    //textAlign: "center",
    backgroundColor: "#287CE7",
    padding: 5,
  },
  p: {
    color: "#FFFF",
    fontSize: 20,
    fontFamily: "open-regular",
    textAlign: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
