import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import numbro from "numbro";
import { LinearGradient } from "expo-linear-gradient";

export const SetInvest = ({
  onBack,
  state,
  setInvest,
  item,
  visibleInvest,
}) => {
  let investStr = numbro(state.invested)
    .format({
      mantissa: 2,
      thousandSeparated: true,
    })
    .replace(",", " ");

  return (
    <Modal visible={visibleInvest} transparent={true}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Confirm?</Text>
          <Text style={styles.underText}>
            Invest: {investStr} TR , Asset: {item.nameInvest}
          </Text>
          <View style={styles.buttonContainer}>
            {/* <LinearGradient
              style={styles.LinearGradient}
              start={{ x: 2, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["#0063E0", "#91C2FF"]}
            > */}

            <TouchableOpacity style={styles.button} onPress={onBack}>
              <Text style={styles.btnText}>Back</Text>
            </TouchableOpacity>

            {/* </LinearGradient> */}
            {/* <LinearGradient
              style={styles.LinearGradient}
              start={{ x: 2, y: 1 }}
              end={{ x: 0, y: 0 }}
              colors={["90deg", "#0063E0", "#91C2FF"]}
            > */}

            <TouchableOpacity style={styles.button} onPress={() => setInvest()}>
              <Text style={styles.btnText}>Invest</Text>
            </TouchableOpacity>

            {/* </LinearGradient> */}
          </View>
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
    minWidth: "75%",
    minHeight: "30%",
    borderRadius: 15,
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
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    width: "60%",
    justifyContent: "center",
  },
  // LinearGradient: {
  //   position: "relative",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   margin: 5,
  //   borderRadius: 8,
  // },
  button: {
    backgroundColor: "#2196F3",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginLeft: 25,
    height: "30%",
  },
  btnText: {
    color: "#FFFF",
    fontFamily: "open-regular",
    fontSize: 18,
    fontWeight: "bold",
  },
});
