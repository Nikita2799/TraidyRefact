import React from "react";
import {
 StyleSheet,
 View,
 Text,
 ImageBackground,
 AsyncStorage,
 Alert,
 Animated,
} from "react-native";
import { MainHeader } from "../../component/header/MainHeader";
import { BlockBet } from "../../component/betsComponent/BlockBet";
import { BalanceContext, AuthContext } from "../../context";

export const BetsScreen = ({ navigation }) => {
 const [trId, setTrId] = React.useState();
 const [state, setstate] = React.useState(0);
 const { refresh } = React.useContext(AuthContext);

 const getId = async () => {
  try {
   const value = await AsyncStorage.getItem("trId");
   setTrId(value);
  } catch (error) {
   console.log(error);
  }
 };

 getId();

 return (
  <ImageBackground
   style={styles.imgBg}
   source={require("../../../assets/img/bg-bets.png")}
  >
   {trId ? <MainHeader refresh={refresh} trId={trId} /> : null}

   <BlockBet trId={trId} navigation={navigation} />
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 imgBg: {
  flex: 1,
  resizeMode: "cover",
 },
});
