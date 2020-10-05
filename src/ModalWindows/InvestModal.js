import React from "react";
import { Modal, StyleSheet, View, ImageBackground, Text } from "react-native";
import { MainHeader } from "../component/header/MainHeader";
import { InvestInput } from "../component/modalComponent/investModalComponent/InvestInput";
import { ModalButtonInvest } from "../component/modalComponent/investModalComponent/ModalButtonInvest";
import axios from "axios";

export const InvestModal = ({ visible, trId, item, onBack, navigation }) => {
 const [state, setState] = React.useState({
  invested: undefined,
  recive: undefined,
  rate: undefined,
 });

 React.useEffect(() => {
  axios
   .post("http://traidy-game.com/users/getCurrencyAll", {
    trId: trId,
    currency: item.nameInvest,
   })
   .then(({ data }) => {
    setState((prev) => ({
     ...prev,
     rate: data.data,
    }));
   })
   .catch((err) => console.log(err));
 }, []);
 //console.log(state.invested);
 return (
  <Modal visible={visible} transparent={true}>
   <ImageBackground
    style={styles.img}
    source={require("../../assets/img/bg.png")}
   >
    <MainHeader trId={trId} />

    <View style={styles.content}>
     <Text style={styles.text}>{item.nameInvest}</Text>
     <InvestInput state={state} setState={setState} item={item} />
     <ModalButtonInvest
      onBack={onBack}
      state={state}
      item={item}
      trId={trId}
      navigation={navigation}
      setState={setState}
     />
    </View>
   </ImageBackground>
  </Modal>
 );
};

const styles = StyleSheet.create({
 img: {
  flex: 1,
 },
 text: {
  color: "#ffff",
  fontFamily: "open-regular",
  fontSize: 30,
  marginTop: 10,
  marginLeft: 15,
 },
 content: {
  flex: 1,
 },
});
