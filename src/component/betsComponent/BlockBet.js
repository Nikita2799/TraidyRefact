import * as React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Alert,
  Animated,
  PanResponder,
} from "react-native";
import { AlertSoon } from "../../ui/AlertSoon";
import { LinearGradient } from "expo-linear-gradient";

export const BlockBet = ({ trId, navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  //const pan = React.useRef(new Animated.ValueXY()).current;
  const [visible, setVisible] = React.useState(false);

  const pressHandler = (e) => {
    setVisible(e);
  };

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      delay: 300,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim).stop();
    };
  }, []);

  return (
    <Animated.View style={[styles.blockButtonContainer, { opacity: fadeAnim }]}>
      <AlertSoon visible={visible} onBack={() => pressHandler(false)} />
      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["90deg", "#0063E0", "#91C2FF"]}
       
      > */}
      <TouchableOpacity
        style={styles.blockButton}
        onPress={() =>
          navigation.navigate("Crypto", { trId: trId, bet: "crypto" })
        }
      >
        <Text style={styles.textButton}>Crypto</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}

      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["90deg", "#0063E0", "#91C2FF"]}
        
      > */}
      <TouchableOpacity
        style={styles.blockButton}
        onPress={() => pressHandler(true)}
      >
        <Text style={styles.textButton}>Resources</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}

      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["90deg", "#0063E0", "#91C2FF"]}
        
      > */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Currency", { trId: trId, bet: "currency" })
        }
        style={styles.blockButton}
      >
        <Text style={styles.textButton}>Currency</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}

      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["90deg", "#0063E0", "#91C2FF"]}
        
      > */}
      <TouchableOpacity
        style={styles.blockButton}
        onPress={() => pressHandler(true)}
      >
        <Text style={styles.textButton}>Stocks</Text>
      </TouchableOpacity>
      {/* </LinearGradient> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  blockButtonContainer: {
    marginVertical: 40,
    height: "55%",
    flexDirection: "row",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
    width: "100%",
    alignItems: "flex-end",
  },
  blockButton: {
    margin: 10,
    width: "40%",
    height: "40%",
    backgroundColor: "#287CE7",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFFF",
    fontSize: 20,
    fontFamily: "open-bold",
  },
});
