import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { MyBetModal } from "../../ModalWindows/MyBetModal";
import numbro from "numbro";
import axios from "axios";

export const MyBet = ({ bet, trId, setState, navigation, refreshRate }) => {
  const [visible, setVisible] = React.useState(false);
  const [rate, setRate] = React.useState();
  //React.useEffect(() => {}, []);
  const pressVisible = () => {
    setVisible(true);
  };

  React.useEffect(() => {
    axios
      .post("http://traidy-game.com/users/getCurrencyData", {
        //http://192.168.0.147/users/getCurrencyData
        trId: trId,
        cur: bet.nameInvest,
      })
      .then(({ data }) => {
        console.log(data);
        setRate(data);
      })
      .catch((err) => console.log(err));
  }, [refreshRate]);

  let profit = (bet.invested * rate - bet.invested * bet.sellPrice) / rate;
  let sell_for_now = Number(bet.invested) + Number(profit);
  let color =
    bet.invested > sell_for_now
      ? "red"
      : bet.invested < sell_for_now
      ? "green"
      : "black";

  return (
    <View>
      <MyBetModal
        visible={visible}
        bet={bet}
        onBack={() => setVisible(false)}
        trId={trId}
        setState={setState}
        navigation={navigation}
        refreshRate={refreshRate}
      />
      <TouchableOpacity onPress={pressVisible} style={styles.button}>
        <View style={styles.nameContainer}>
          <Text>{bet.nameInvest}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={{ color: color }}>
            {numbro(sell_for_now)
              .format({
                mantissa: 2,
                thousandSeparated: true,
              })
              .replace(",", " ")}
          </Text>
        </View>
        <Image
          style={styles.img}
          source={require("../../../assets/img/ellipse-bets.png")}
        />
        <Image
          style={styles.imgBottom}
          source={require("../../../assets/img/ellipse-bets-bottom.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFF",
    borderRadius: 5,
    marginTop: 10,
    width: 320,
    height: 50,
  },
  nameContainer: {
    //backgroundColor: "#000",
    width: 120,
  },
  textContainer: {
    //backgroundColor: "#000",
    width: 70,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  img: {
    position: "absolute",
    left: 290,
    bottom: 18,
    borderTopRightRadius: 10,
  },
  imgBottom: {
    position: "absolute",
    left: 290,
    top: 20,
    borderBottomRightRadius: 10,
  },
});
