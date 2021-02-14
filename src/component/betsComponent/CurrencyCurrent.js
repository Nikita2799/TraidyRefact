import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { InvestModal } from "../../ModalWindows/InvestModal";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
export const CurrencyCurrent = ({ item, trId, navigation }) => {
  const [visible, setVisible] = React.useState(false);
  //console.log(navigation);

  const pressHandler = (e) => {
    setVisible(e);
  };
  //console.log(navigation);
  return (
    <View style={styles.content}>
      <InvestModal
        navigation={navigation}
        onBack={pressHandler}
        visible={visible}
        trId={trId}
        item={item}
      />
      <TouchableOpacity
        onPress={() => pressHandler(true)}
        style={styles.mainContainer}
      >
        <FontAwesome name={item.iconsName} size={24} color="black" />
        <Text>{item.nameInvest}</Text>
        <Text style={styles.text}>Tap to invest</Text>
        <Image
          style={styles.img}
          source={require("../../../assets/img/ellipse-bets.png")}
        />
        <Image
          style={styles.imgBottom}
          source={require("../../../assets/img/ellipse-bets-bottom.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFF",
    marginTop: 20,
    width: 335,
    height: 50,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
  },
  img: {
    position: "absolute",
    left: 307,
    bottom: 18,
    borderTopRightRadius: 10,
  },
  imgBottom: {
    position: "absolute",
    left: 307,
    top: 20,
    borderBottomRightRadius: 10,
  },
  text: {
    marginRight: 20,
  },
});
