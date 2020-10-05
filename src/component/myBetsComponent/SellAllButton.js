import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Alert } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";

export const SellOneButton = ({ trId, setState }) => {
 const { refreshing } = React.useContext(AuthContext);
 const sellAll = () => {
  Alert.alert(
   "Are you sure?",
   "Delete all",
   [
    {
     text: "Cancel",
     onPress: () => console.log("Cancel Pressed"),
     style: "cancel",
    },
    {
     text: "OK",
     onPress: () => {
      if (trId) {
       axios
        .post("http://traidy-game.com/users/sellAll", {
         trId: trId,
        })
        .then((responce) => {
         if (responce.data.status === "success")
          setState((prev) => ({ ...prev, myBetsList: undefined }));
         refreshing(true);
        })
        .catch((err) => {
         console.log(err);
        });
      }
     },
    },
   ],
   { cancelable: false }
  );
 };

 return (
  <View style={styles.buttonContainer}>
   <TouchableOpacity onPress={sellAll} style={styles.sellAllButton}>
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
 },
 text: {
  color: "#FFFF",
 },
});
