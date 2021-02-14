import * as React from "react";
import {
 StyleSheet,
 ImageBackground,
 AsyncStorage,
 FlatList,
 View,
 RefreshControl,
} from "react-native";
import { MainHeader } from "../../component/header/MainHeader";
import axios from "axios";
import { MyBet } from "../../component/myBetsComponent/MyBet";
import { SellOneButton } from "../../component/myBetsComponent/SellAllButton";
import { AuthContext } from "../../context";

export const MyBetsScreen = ({ navigation }) => {
 const url = "http://traidy-game.com/users/getInvestData";

 const [state, setState] = React.useState({
  trId: undefined,
  myBetsList: undefined,
 });
 const { refresh } = React.useContext(AuthContext);
 const [refreshing, setRefreshing] = React.useState(false);
 const getBets = async () => {
  try {
   const trId = await AsyncStorage.getItem("trId");

   if (trId) {
    
    axios
     .post(url, {
      trId: trId,
     })
     .then(({ data }) => {
      console.log(data);
      setState((prev) => ({
       ...prev,
       trId: trId,
       myBetsList: data.data,
      }));
     })
     .catch((err) => console.log(err));
   }
  } catch (error) {
   console.log(error);
  }
 };

 React.useEffect(() => {
  getBets();
 }, [refresh]);

 const onRefresh = React.useCallback(async () => {
  setRefreshing(true);
  try {
   const trId = await AsyncStorage.getItem("trId");
   console.log(trId);
   if (trId) {
    await axios
     .post(url, {
      trId: trId,
     })
     .then(({ data }) => {
      console.log(data);
      setState((prev) => ({
       ...prev,
       trId: trId,
       myBetsList: data.data,
      }));
     })
     .catch((err) => console.log(err));
    setRefreshing(false);
   }
  } catch (error) {
   console.log(error);
  }
  setRefreshing(false);
 }, [refreshing]);

 return (
  <ImageBackground
   style={styles.img}
   source={require("../../../assets/img/bg.png")}
  >
   {state.trId ? <MainHeader refresh={refresh} trId={state.trId} /> : null}

   <SellOneButton
    setState={setState}
    trId={state.trId ? state.trId : undefined}
   />

   <View style={styles.list}>
    <FlatList
     style={styles.flatList}
     keyExtractor={(item) => item.id.toString()}
     data={state.myBetsList}
     renderItem={({ item }) => (
      <MyBet setState={setState} trId={state.trId} bet={item} />
     )}
     refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
     }
    />
   </View>
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 img: {
  flex: 1,
 },
 list: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
 },
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
