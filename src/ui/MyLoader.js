import React from "react";
import {
 StyleSheet,
 Animated,
 ImageBackground,
 Text,
 View,
 ActivityIndicator,
} from "react-native";

export const MyLoader = ({ setShow }) => {
 React.useEffect(() => {
  setTimeout(() => {
   setShow(true);
  }, 10);
 }, []);
 return (
  <ImageBackground
   style={{ flex: 1 }}
   source={require("../../assets/img/preLoaderImg.png")}
  >
   <View style={styles.mainContainer}>
    <Text style={styles.text}>Loading data</Text>
    <ActivityIndicator color="#A6CEEA" size="large" />
   </View>
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 img: {
  flex: 1,
 },
 mainContainer: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: 100,
 },
 text: {
  color: "#FFFF",

  fontSize: 15,
 },
});
