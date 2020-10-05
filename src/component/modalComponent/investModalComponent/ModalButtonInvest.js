import React from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import axios from "axios";
import { BalanceContext, AuthContext } from "../../../context";

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
 console.log(item);
 const pressHandleData = () => {
  //reqvest on server
  if (state.invested) {
   //modall window

   Alert.alert(
    "Сonfirm rate?",
    `Invest: ${state.invested}, Name: ${item.nameInvest}`,
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
         name: item.nameInvest,
         amount: state.invested,
         rate: state.rate,
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
