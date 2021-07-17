import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { icon } from "../../assets/img/check.png";

export const SuccessWindow = ({ visibleDone, onBack, navigation }) => {
  const goMenu = () => {
    navigation.navigate("Bets");
  };

  return (
    <Modal visible={visibleDone} transparent={true}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Done</Text>
          <Image
            style={styles.image}
            source={require("../../assets/img/check.png")}
          />
          <TouchableOpacity style={styles.btn} onPress={goMenu}>
            <Text style={styles.textBtn}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000aa",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "#0063E0",
    alignItems: "center",
    justifyContent: "space-around",
    minWidth: "75%",
    minHeight: "30%",
    padding: 15,
    borderRadius: 15,
    margin: 118,
  },
  text: {
    color: "#ffff",
    fontFamily: "open-regular",
    fontSize: 40,
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  btn: {
    backgroundColor: "#2196F3",
    minWidth: "30%",
    minHeight: "5%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#FFFF",
  },
});
