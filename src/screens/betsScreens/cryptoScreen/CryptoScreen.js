import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";
import { CryptoCurrent } from "../../../component/betsComponent/CryptoCurrent";
import { MainHeader } from "../../../component/header/MainHeader";

export const CryptoScreen = ({ navigation }) => {
 //get trId
 const trId = navigation.state.params.trId;

 const [cryptoList, setCryptoList] = React.useState([
  {
   id: 1,
   name: "Bitcoin",
   nameInvest: "BTC",
   iconsName: "bitcoin",
  },
 
 ]);

 return (
  <ImageBackground
   style={styles.img}
   source={require("../../../../assets/img/bg.png")}
  >
   <MainHeader trId={trId} />

   <FlatList
    keyExtractor={(item) => item.id.toString()}
    data={cryptoList}
    renderItem={({ item }) => (
     <CryptoCurrent
      navigation={navigation}
      setCryptoList={setCryptoList}
      trId={trId}
      item={item}
     />
    )}
   />
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 img: {
  flex: 1,
 },
});
