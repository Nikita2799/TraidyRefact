import React from "react";
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

export const MyBetModal = ({ visible, bet, onBack, trId, setState }) => {
 const { refresh, refreshing } = React.useContext(AuthContext);
 const [rate, setRate] = React.useState();
 //console.log(bet);
 React.useEffect(() => {
  axios
   .post("http://traidy-game.com/users/getCurrencyAll", {
    trId: trId,
    currency: bet.nameInvest,
   })
   .then(({ data }) => {
    setRate(data.data);
   })
   .catch((err) => console.log(err));
 }, []);
 const sellOne = () => {
  Alert.alert(
   "Are you sure",
   "Delete one",
   [
    {
     text: "Cancel",
     onPress: () => console.log("Cancel Pressed"),
     style: "cancel",
    },
    {
     text: "OK",
     onPress: () => {
      axios
       .post("http://traidy-game.com/users/sellOne", {
        trId: trId,
        id: bet.id,
        invested: bet.invested,
        rate: bet.sellPrice,
        currency: bet.nameInvest,
       })
       .then(({ data }) => {
        if (data.status === "success") {
         setState((prev) => ({
          ...prev,
          myBetsList: prev.myBetsList.filter((b) => b.id !== bet.id),
         }));
         refreshing(true);
        }
       })
       .catch((err) => {
        console.log(err);
       });
     },
    },
   ],
   { cancelable: false }
  );
 };

 let received = bet.invested * rate;
 let profit = bet.invested - (bet.invested * bet.sellPrice) / rate;

 return (
  <Modal visible={visible}>
   <ImageBackground
    source={require("../../assets/img/bg.png")}
    style={styles.img}
   >
    <MainHeader refresh={refresh} trId={trId} />
    <View style={styles.textContainer}>
     <Text style={styles.mainText}>Information</Text>
     <Text style={styles.text}>Asset: {bet.nameInvest}</Text>
     <Text style={styles.text}>Invested {bet.invested} TR</Text>
     <Text style={styles.text}>
      Received: {received.toFixed(2)} {bet.nameInvest}
     </Text>
     <Text style={styles.text}>Current rate: {bet.sellPrice}</Text>
     <Text style={styles.text}>Profit: {profit.toFixed(2)}</Text>
    </View>
    <View style={styles.buttonContainer}>
     <TouchableOpacity onPress={sellOne} style={styles.button}>
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
