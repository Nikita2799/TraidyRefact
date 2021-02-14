import React from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import { BalanceContext, AuthContext } from "../../../context";
import numbro from "numbro";

export const ModalButtonInvest = ({
 trId,
 state,
 item,
 onBack,
 navigation,
 setState,
}) => {
 const url = "http://traidy-game.com/users/setInvest";
 const { refreshing } = React.useContext(AuthContext); //post data on server

 const pressHandleData = () => {
  //reqvest on server
  if (state.invested) {
   //modall  window
   let investStr = numbro(state.invested).format({
     mantissa: 2,
     thousandSeparated: true
   })
   Alert.alert(
    "Сonfirm?",
    `Invest: ${investStr}, Asset: ${item.nameInvest}`,
    [
     {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "destructive",
     },
     {
      text: "OK",
      onPress: () => {
       //doing request on server
       axios
        .post(url, {
         trId: trId,
         cur: item.nameInvest,
         invest: state.invested,
         //nameCode: item.name,
        })
        .then(({ data }) => {
         navigation.navigate("Bets");
         refreshing(true);
         setState((prev) => ({
          ...prev,
          recive: undefined,
         }));
        })
        .catch((err) => console.log(err));
      },
     },
    ],
    { cancelable: false }
   );
  } else {
   Alert.alert("Please input number");
  }
 };

 return (
  <View style={styles.container}>
   <TouchableOpacity style={styles.button} onPress={pressHandleData}>
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
