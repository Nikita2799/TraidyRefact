import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export const InvestInput = ({ state, setState, item }) => {
 const [recive, setRecive] = React.useState(undefined);
 //console.log(state);
 const changeHandle = (e) => {
  let invest = e.nativeEvent.text;

  if (invest !== "") {
   setState((prev) => ({
    ...prev,
    invested: invest,
   }));
  }
 };

 React.useEffect(() => {
  let rec = Number(state.invested) * Number(state.rate);
  setState((prev) => ({
   ...prev,
   recive: rec.toFixed(2).toString(),
  }));
 }, [state.invested]);

 return (
  <View style={styles.container}>
   <Text style={styles.text}>Invest</Text>
   <TextInput
    maxLength={10}
    keyboardType="numeric"
    onChange={changeHandle}
    style={styles.input}
   />
   <Text style={styles.textReceive}>Receive</Text>
   <TextInput style={styles.input} value={state.recive} editable={false} />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
 },
 text: {
  color: "#FFFF",
  marginRight: 250,
  marginTop: 10,
  marginBottom: 10,
  fontSize: 17,
 },
 textReceive: {
  color: "#FFFF",
  marginRight: 230,
  marginTop: 10,
  marginBottom: 10,
  fontSize: 17,
 },
 input: {
  backgroundColor: "#243D61",
  width: "80%",
  height: 35,
  marginBottom: 20,
  borderRadius: 5,
  paddingLeft: 10,
  color: "#FFFF",
  fontSize: 15,
 },
});
