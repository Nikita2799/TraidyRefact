import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";

export const AlertSoon = ({ visible, onBack, navigation }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Coming soon</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onBack} style={styles.button}>
            <Text style={styles.btnText}>Back</Text>
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
    justifyContent: "center",
    minWidth: "75%",
    minHeight: "30%",
    padding: 15,
    borderRadius: 15,
    margin: 118,
  },
  text: {
    color: "#ffff",
    fontFamily: "open-regular",
    fontSize: 30,
    marginTop: 10,
    marginLeft: 15,
  },
  underText: {
    color: "#FFFF",
    fontFamily: "open-regular",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 20,
  },
  buttonContainer: {
    minHeight: "5%",
    minWidth: "100%",
  },
  button: {
    backgroundColor: "#0063E0",
    minHeight: "7%",
    maxWidth: "25%",
    alignItems: "center",
    justifyContent: "center",
    marginStart: 31,
    borderRadius: 8,
  },
  btnText: {
    color: "#FFFF",
    fontFamily: "open-regular",
    fontSize: 18,
    fontWeight: "bold",
  },
});
