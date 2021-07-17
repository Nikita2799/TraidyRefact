import React, { useEffect } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import { BalanceContext, AuthContext } from "../../../context";
import numbro from "numbro";
import { SetInvest } from "../../../ui/SetInvest";
import { SuccessWindow } from "../../../ui/SuccessWindow";

export const ModalButtonInvest = ({
  trId,
  state,
  item,
  onBack,
  navigation,
  setState,
}) => {
  //const url = "http://192.168.0.147/users/setInvest ";
  const url = "http://traidy-game.com/users/setInvest";

  const { refreshing } = React.useContext(AuthContext); //post data on server
  const [visibleInvest, setVisibleInvest] = React.useState(false);
  const [visibleDone, setVisibleDone] = React.useState(false);

  const pressHandlerInvest = (e) => {
    setVisibleInvest(e);
  };

  const pressHandlerDone = (e) => {
    setVisibleDone(e);
  };

  const pressHandleData = () => {
    //reqvest on server
    console.log(item.nameInvest, "test");
    if (state.invested) {
      //modall  window
      let investStr = numbro(state.invested).format({
        mantissa: 2,
        thousandSeparated: true,
      });
      console.log(item, state, "data");
      axios
        .post(url, {
          trId: trId,
          cur: item.nameInvest,
          invest: state.invested,
          //nameCode: item.name,
        })
        .then(({ data }) => {
          refreshing(true);
          console.log(data);
          setState((prev) => ({
            ...prev,
            recive: undefined,
          }));

          setVisibleInvest(false);
          setVisibleDone(true);
        })
        .catch((err) => console.log(err));
    } else {
      Alert.alert("Please input number");
    }
  };

  return (
    <View style={styles.container}>
      <SuccessWindow
        navigation={navigation}
        visibleDone={visibleDone}
        onBack={() => pressHandlerDone(false)}
      />
      <SetInvest
        state={state}
        item={item}
        setInvest={pressHandleData}
        onBack={() => pressHandlerInvest(false)}
        visibleInvest={visibleInvest}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => pressHandlerInvest(true)}
      >
        <Text style={styles.text}>Invest</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onBack(false)}>
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0062DE",
    borderRadius: 5,
  },
  text: {
    color: "#FFFF",
    fontFamily: "open-regular",
  },
});
