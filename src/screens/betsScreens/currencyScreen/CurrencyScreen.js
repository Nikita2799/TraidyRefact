import React from "react";
import { StyleSheet, ImageBackground, FlatList } from "react-native";
import { MainHeader } from "../../../component/header/MainHeader";
import { CurrencyCurrent } from "../../../component/betsComponent/CurrencyCurrent";

export const CurrencyScreen = ({ navigation }) => {
 const trId = navigation.state.params.trId;

 const [currencyList, setCurrencyList] = React.useState([
  {
   id: 1,
   name: "Dollar",
   nameInvest: "USD",
   iconsName: "usd",
   rate: "1.11",
  },
  {
   id: 2,
   name: "Ruble",
   nameInvest: "RUB",
   iconsName: "rub",
   rate: "88.60",
  },
  {
   id: 3,
   name: "Yena",
   nameInvest: "JPY",
   iconsName: "jpy",
   rate: "88.60",
  },
  {
   id: 4,
   name: "Funt",
   nameInvest: "GBP",
   iconsName: "gbp",
   rate: "88.60",
  },
  {
   id: 5,
   name: "Yan",
   nameInvest: "CNY",
   iconsName: "cny",
   rate: "88.60",
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
    data={currencyList}
    renderItem={({ item }) => (
     <CurrencyCurrent navigation={navigation} trId={trId} item={item} />
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
