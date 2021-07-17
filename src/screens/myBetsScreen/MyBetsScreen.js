import * as React from "react";
import {
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
  View,
  RefreshControl,
} from "react-native";
import { MainHeader } from "../../component/header/MainHeader";
import axios from "axios";
import { MyBet } from "../../component/myBetsComponent/MyBet";
import { SellOneButton } from "../../component/myBetsComponent/SellAllButton";
import { AuthContext } from "../../context";
import AsyncStorage from "@react-native-community/async-storage";

export const MyBetsScreen = ({ navigation }) => {
  //const url = " http://192.168.0.147/users/getInvestData";
  const url = "http://traidy-game.com/users/getInvestData";

  const [state, setState] = React.useState({
    trId: undefined,
    myBetsList: undefined,
  });
  const { refresh } = React.useContext(AuthContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [refreshRate, setRefreshRate] = React.useState(false);
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
            if (data) {
              setState((prev) => ({
                ...prev,
                trId: trId,
                myBetsList: data,
              }));
            } else {
              setState((prev) => ({
                ...prev,
                trId: trId,
                myBetsList: [],
              }));
            }
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
            console.log(data, "refresh");
            setState((prev) => ({
              ...prev,
              trId: trId,
              myBetsList: data,
            }));
          })
          .catch((err) => console.log(err));
        setRefreshRate(refreshRate ? false : true);
        console.log(refreshRate, "reat");
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
      <Text style={{ color: "#FFFF", fontSize: 28, top: 40, marginLeft: 30 }}>
        My Bets
      </Text>

      <SellOneButton
        setState={setState}
        trId={state.trId ? state.trId : undefined}
        navigation={navigation}
      />

      <View style={styles.list}>
        <FlatList
          style={styles.flatList}
          keyExtractor={(item) => item.id.toString()}
          data={state.myBetsList}
          renderItem={({ item }) => (
            <MyBet
              navigation={navigation}
              setState={setState}
              trId={state.trId}
              bet={item}
              refreshRate={refreshRate}
            />
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
    marginRight: 60,
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
