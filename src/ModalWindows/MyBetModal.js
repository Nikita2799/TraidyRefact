import React, { useState } from "react";
import {
  StyleSheet,
  Modal,
  Text,
  ImageBackground,
  View,
  Alert,
  TouchableOpacity,
} from "react-native";
import { MainHeader } from "../component/header/MainHeader";
import axios from "axios";
import { AuthContext } from "../context";
import numbro from "numbro";
import { ConfirmWindow } from "../ui/ConfirmWindow";

export const MyBetModal = ({
  visible,
  bet,
  onBack,
  trId,
  setState,
  navigation,
  refreshRate,
}) => {
  const { refresh, refreshing } = React.useContext(AuthContext);
  const [rate, setRate] = React.useState();
  const [visibleWindow, setVisible] = useState(false);

  const pressHanler = (e) => {
    setVisible(e);
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
  console.log(rate);
  console.log(profit, "profit");
  // if(profit<0)
  //     sell_for_now

  let color =
    bet.invested > sell_for_now
      ? "red"
      : bet.invested < sell_for_now
      ? "green"
      : "white";

  sell_for_now = numbro(sell_for_now)
    .format({
      mantissa: 2,
      thousandSeparated: true,
    })
    .replace(",", " ");

  let invested = numbro(bet.invested)
    .format({
      mantissa: 2,
      thousandSeparated: true,
    })
    .replace(",", " ");

  return (
    <Modal visible={visible}>
      <ImageBackground
        source={require("../../assets/img/bg.png")}
        style={styles.img}
      >
        <ConfirmWindow
          setState={setState}
          visible={visibleWindow}
          bet={bet}
          onBack={() => pressHanler(false)}
          trId={trId}
          type={1}
          navigation={navigation}
          refreshing={refreshing}
        />
        <MainHeader refresh={refresh} trId={trId} />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>Information</Text>
          <Text style={styles.text}>Asset: {bet.nameInvest}</Text>
          <Text style={styles.text}>Invested {invested} TR</Text>
          <Text style={styles.text}>
            Sell now for:{" "}
            <Text
              style={[
                {
                  color: color,
                  marginBottom: 20,
                  fontSize: 16,
                  fontFamily: "open-regular",
                },
              ]}
            >
              {sell_for_now} TR
            </Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => pressHanler(true)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onBack}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: 20,
  },
  mainText: {
    color: "#FFFF",
    fontSize: 27,
    fontFamily: "open-regular",
    marginTop: 10,
    marginBottom: 20,
  },
  text: {
    marginBottom: 20,
    color: "#FFFF",
    fontSize: 16,
    fontFamily: "open-regular",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  button: {
    backgroundColor: "#0062DE",
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 20,
    marginLeft: 10,
  },
  buttonText: {
    color: "#FFFF",
  },
});
