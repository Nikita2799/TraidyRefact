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

export const BlockBet = ({ trId, navigation }) => {
 const fadeAnim = React.useRef(new Animated.Value(0)).current;
 const pan = React.useRef(new Animated.ValueXY()).current;

 const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderMove: Animated.event([
   null,
   {
    dx: pan.x,
    dy: pan.y,
   },
  ]),
 });

 React.useEffect(() => {
  Animated.timing(fadeAnim, {
   toValue: 1,
   duration: 2000,
   delay: 300,
   useNativeDriver: true,
  }).start();
 }, []);

 return (
  <Animated.View style={[styles.blockButtonContainer, { opacity: fadeAnim }]}>
   <TouchableOpacity
    onPress={() => navigation.push("Crypto", { trId: trId, bet: "crypto" })}
    style={styles.blockButton}
   >
    <Text style={styles.textButton}>Crypto</Text>
   </TouchableOpacity>

   <TouchableOpacity
    onPress={() => Alert.alert("Coming soon")}
    style={styles.blockButton}
   >
    <Text style={styles.textButton}>Resources</Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={() => navigation.push("Currency", { trId: trId, bet: "currency" })}
    style={styles.blockButton}
   >
    <Text style={styles.textButton}>Currency</Text>
   </TouchableOpacity>
   <TouchableOpacity
    onPress={() => Alert.alert("Coming soon")}
    style={styles.blockButton}
   >
    <Text style={styles.textButton}>Stocks</Text>
   </TouchableOpacity>
  </Animated.View>
 );
};

const styles = StyleSheet.create({
 blockButtonContainer: {
  marginVertical: 40,
  width: "100%",
  height: "55%",
  flexDirection: "row",
  flexWrap: "wrap-reverse",
  justifyContent: "center",
  alignItems: "flex-end",
 },
 blockButton: {
  margin: 10,
  backgroundColor: "#FFFF",
  width: "40%",
  height: "40%",
  backgroundColor: "#0063E0",
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
