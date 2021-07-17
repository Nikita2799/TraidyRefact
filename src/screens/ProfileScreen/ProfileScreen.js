import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";

export const ProfileScreen = () => {
  const [state, setState] = useState({
    login: "",
    trId: "",
    password: "",
    status: "beta",
  });
  const getTrId = async () => {
    const trId = await AsyncStorage.getItem("trId");
    setState((prev) => ({
      ...prev,
      trId: trId,
    }));
  };
  // useEffect(async () => {
  //   getTrId();
  //   await axios
  //     .post(url, {
  //       trId: trId,
  //     })
  //     .then(({ data }) => {
  //       setState((prev) => ({
  //         ...prev,
  //         login: data.login,
  //       }));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <ImageBackground
      style={styles.imgBackground}
      source={require("../../../assets/img/bg.png")}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Profile</Text>
        </View>
        <View>
          <View style={styles.containerText}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.p}>test</Text>
          </View>
          <View>
            <Text style={styles.title}>Traidy ID</Text>
            <Text style={styles.p}>test</Text>
          </View>
          <View>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.p}>{state.status}</Text>
          </View>
        </View>
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
    paddingTop: "20%",
    paddingStart: 20,
  },
  h1: {
    color: "#FFFF",
    fontSize: 36,
    fontFamily: "open-regular",
  },
  title: {
    marginTop: "5%",
    color: "#9C9C9C",
    fontSize: 15,
    fontFamily: "open-light",
  },
  p: {
    color: "#FFFF",
    fontSize: 18,
    marginTop: "2%",
    fontFamily: "open-light",
  },
  containerText: {
    marginTop: "15%",
  },
});
