import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import axios from "axios";

export const ConfirmWindow = ({
  visible,
  onBack,
  type,
  setState,
  trId,
  bet,
  refreshing,
  navigation,
}) => {
  const sell = () => {
    if (trId) {
      switch (type) {
        case "Delete all":
          axios //" http://192.168.0.147/users/sellAll
            .post("http://traidy-game.com/users/sellAll", {
              trId: trId,
            })
            .then((responce) => {
              if (responce.data.status === "success")
                setState((prev) => ({ ...prev, myBetsList: [] }));
              navigation.navigate("Bets");
              refreshing(true);
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case 1:
          axios // http://192.168.0.147/users/sellOne
            .post("http://traidy-game.com/users/sellOne", {
              trId: trId,
              id: bet.id,
              invested: bet.invested,
              rate: bet.sellPrice,
              currency: bet.nameInvest,
            })
            .then(({ data }) => {
              console.log(data, "mydata");
              if (data.statys === "success") {
                setState((prev) => ({
                  ...prev,
                  myBetsList: prev.myBetsList.filter((b) => b.id !== bet.id),
                }));
                navigation.navigate("Bets");
                refreshing(true);
              }
            })
            .catch((err) => {
              console.log(err);
            });
          break;
      }
    }
    onBack();
  };
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image />
          <Text style={styles.text}>Are you sure</Text>
          <Text style={styles.textType}>
            {type === "Delete all" ? "Sell all" : "Sell one"}
          </Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={sell}>
              <Text style={styles.textBtn}>Ok</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={onBack}>
              <Text style={styles.textBtn}>Back</Text>
            </TouchableOpacity>
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
  btnContainer: {
    flexDirection: "row",
    height: "20%",
    width: "80%",
    justifyContent: "space-around",
    marginLeft: 10,
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
    fontSize: 30,
    marginTop: 10,
    marginLeft: 15,
  },
  textType: {
    color: "#FFFF",
  },
  btn: {
    backgroundColor: "#2196F3",
    width: "40%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    color: "#FFFF",
  },
});
