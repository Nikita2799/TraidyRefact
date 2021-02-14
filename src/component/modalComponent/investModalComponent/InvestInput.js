import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import numbro from 'numbro';

export const InvestInput = ({ state, setState, item }) => {
 const [recive, setRecive] = React.useState(undefined);
 //console.log(state);
 const changeHandle = (e) => {
  let invest = e.nativeEvent.text;
 ////// invest = numbro.unformat(invest)
 // console.log(invest);
  //console.log(typeof invest);
  if (invest !== "") {
   setState((prev) => ({
    ...prev,
    invested: invest,
    investedStr: numbro(state.invested).format({
        thousandSeparated: true,
        mantissa: 2,
     })
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
   <View style={styles.inputContainer}>
   
   <TextInput
      maxLength={10}
      //  value={state.in}
      keyboardType="numeric"
      onChange={changeHandle}
      style={styles.input}
    />
       <Text style={styles.textInvest}>TR</Text>
   </View>
    
   <Text style={styles.textReceive}>Receive</Text>
   <View style={styles.inputContainer}>
      <TextInput style={styles.input} value={state.recive} editable={false} />
      <Text style={styles.textInvest}>{item.nameInvest}</Text>
   </View>
   
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
 },
 text: {
  color: "#FFFF",
  marginRight: 255,
  marginTop: 10,
  marginBottom: 10,
  fontSize: 17,
 },
 textInvest:{
  color: "#0063E0" , 
  fontSize: 20,
  position: 'absolute',
  right: 50
 },
 textReceive: {
  color: "#FFFF",
  marginRight: 240,
  marginTop: 10,
  marginBottom: 10,
  fontSize: 17,
 },
 inputContainer:{
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   padding: 15
  },
 input: {
  height: 35 ,
  backgroundColor: "#243D61",
  width: '90%',
  borderRadius: 5,
  paddingLeft: 10,
  color: "#FFFF",
  fontSize: 15,
 },
});
