import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";
import { ConfirmWindow } from "../../ui/ConfirmWindow";

export const SellOneButton = ({ trId, setState, navigation }) => {
  const { refreshing } = React.useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  const pressHanler = (e) => {
    setVisible(e);
  };

  return (
    <View style={styles.buttonContainer}>
      <ConfirmWindow
        visible={visible}
        onBack={() => pressHanler(false)}
        setState={setState}
        type="Delete all"
        trId={trId}
        refreshing={refreshing}
        navigation={navigation}
      />
      <TouchableOpacity
        onPress={() => pressHanler(true)}
        style={styles.sellAllButton}
      >
        <Text style={styles.text}>Sell all</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    marginTop: 10,
    marginRight: 50,
    marginBottom: 10,
  },
  sellAllButton: {
    backgroundColor: "#0062DE",
    width: 100,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
  },
  text: {
    color: "#FFFF",
  },
});
