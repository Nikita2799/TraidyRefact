import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import axios from "axios";
import numbro from "numbro";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BalanceContext, AuthContext } from "../../context";

export const MainHeader = ({ trId, refresh }) => {
 const urlUserData = "http://traidy-game.com/users/getUserData";
 const urlGetCapital = "http://traidy-game.com/users/getCapital";
 const { refreshing } = React.useContext(AuthContext);

 const [state, setState] = React.useState({
  balance: undefined,
  capitalStr: undefined,
  nowCapital: undefined,
  lastCapital: undefined,
 });

 // add balance and last capital, and formating balance
 const formatBalance = (balance, capitalizationLast) => {
  setState((prev) => ({
   ...prev,
   lastCapital: Number(capitalizationLast),
   balance: numbro(balance).format({
    thousandSeparated: true,
    mantissa: 2,
   }),
  }));
 };

 //add now capitalization and formating in string
 const formatCapital = (nowCapital) => {
  setState((prev) => ({
   ...prev,
   nowCapital: nowCapital,
   capitalStr: numbro(nowCapital).format({
    mantissa: 2,
    thousandSeparated: true,
   }),
  }));
 };

 /*const refreshHandle = () => {
  axios //get balance and last capitalization
   .post(urlUserData, {
    trId: trId,
   })
   .then(({ data }) => {
    if (trId) {
     formatBalance(data.amount, data.capitalizationLast);
    }
   })
   .then(() => {
    //get now capitalization
    return axios
     .post(urlGetCapital, {
      trId: trId,
     })
     .then(({ data }) => {
      console.log(data, "capital now");
      if (trId) {
       formatCapital(Number(data.data));
      }
     });
   });
 };*/

 useEffect(() => {
  axios //get balance and last capitalization
   .post(urlUserData, {
    trId: trId,
   })
   .then(({ data }) => {
    if (trId) {
     formatBalance(data.amount, data.capitalizationLast);
    }
   })
   .then(() => {
    //get now capitalization
    return axios
     .post(urlGetCapital, {
      trId: trId,
     })
     .then(({ data }) => {
      if (trId) {
       formatCapital(Number(data.data));
       refreshing(false);
      }
     });
   });
 }, [refresh]);

 //get current color capitalization
 let capitalColor =
  state.nowCapital > state.lastCapital
   ? "green"
   : state.nowCapital < state.lastCapital
   ? "red"
   : "#000";

 return (
  <View style={styles.headerContainer}>
   <View style={styles.imgEllipse}>
    <Image source={require("../../../assets/img/ellipse-left.png")} />

    <Image source={require("../../../assets/img/ellipse-right.png")} />
   </View>

   <View style={styles.mainContent}>
    <Text style={styles.text}>Amount to invest</Text>
    <View style={styles.balanceContainer}>
     <Text style={styles.balance}>
      {state.balance ? state.balance : "Wait please"}
     </Text>
     <Text style={{ color: "#0063E0" , fontSize: 20}}> TR</Text>
    </View>

    <Text style={styles.text}>Capitalization</Text>
    <View style={styles.balanceContainer}>
     <Text
      style={{
       color: capitalColor,
       fontWeight: "600",
       fontSize: 20,
      }}
     >
      {state.capitalStr ? state.capitalStr : "Wait please"}
     </Text>

     <Text style={{ color: "#0063E0",fontSize: 20 }}> TR</Text>
     {/*<TouchableOpacity onPress={refreshHandle} style={styles.imgButton}>
      <Image
       source={require("../../../assets/img/refresh.png")}
       style={styles.imgRefresh}
      />
     </TouchableOpacity>*/}
    </View>
   </View>
  </View>
 );
};
const styles = StyleSheet.create({
 headerContainer: {
  backgroundColor: "#FFFF",
  width: "100%",
  height: "30%",
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
 },
 imgEllipse: {
  flexDirection: "row",
  justifyContent: "space-between",
 },
 
 mainContent: {
  alignItems: "center",
 },
 balanceContainer: {
  flexDirection: "row",
  marginTop: 5,
  marginBottom: 5,
  alignItems: 'center',
  justifyContent:'center'
 },
 capitalContainer: {
  flexDirection: "row",
  marginTop: 5,
  marginBottom: 5,
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
 },
 text: {
  fontSize: 15,
 },
 balance: {
  fontSize: 20,
  fontWeight: "600",
 },
 capital: {
  marginLeft: 40,
  fontWeight: "600",
  fontSize: 20,
 },
 imgButton: {
  marginLeft: 40,
 },
});
