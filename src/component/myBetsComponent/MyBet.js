import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { MyBetModal } from "../../ModalWindows/MyBetModal";
import numbro from 'numbro';

export const MyBet = ({ bet, trId, setState }) => {
  const [visible, setVisible] = React.useState(false);

  const pressVisible = () => {
    setVisible(true);
  };

  return (
    <View>
      <MyBetModal
        visible={visible}
        bet={bet}
        onBack={() => setVisible(false)}
        trId={trId}
        setState={setState}
      />
      <TouchableOpacity onPress={pressVisible} style={styles.button}>
        <View style={styles.nameContainer}>
          <Text>Img {bet.nameInvest}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{numbro(bet.invested).format({ mantissa:2,thousandSeparated:true})}</Text>
        </View>
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
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFFF",
    borderRadius: 5,
    marginTop: 10,
    width: 320,
    height: 50,
  },
  nameContainer: {
    //backgroundColor: "#000",
    width: 120,
  },
  textContainer: {
    //backgroundColor: "#000",
    width: 70,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  img: {
    position: "absolute",
    left: 290,
    bottom: 18,
    borderTopRightRadius: 10,
  },
  imgBottom: {
    position: "absolute",
    left: 290,
    top: 20,
    borderBottomRightRadius: 10,
  },
});
