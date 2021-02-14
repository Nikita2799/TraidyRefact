import React from "react";
import {
 StyleSheet,
 Animated,
 ImageBackground,
 Text,
 View,
 ActivityIndicator,
 Image
} from "react-native";

export const MyLoader = ({ setShow }) => {
 React.useEffect(() => {
  setTimeout(() => {
   setShow(true);
  }, 3000);
 }, []);
 return (
  <ImageBackground
   style={{ flex: 1 }}
   source={require("../../assets/img/bg-preloader.png")}
  >
   <View style={styles.mainContainer}>
    <Image style={{position:"absolute",top:0}} source={require('../../assets/img/vector.png')}/>
    <View>
        <Image source={require('../../assets/img/logo.png')}/>
        <Image style={styles.imgLogo} source={require('../../assets/img/invest.png')}/>
    </View>
    <View>
  
    
    <ActivityIndicator color="#A6CEEA" size="large" />
    <Text style={styles.text}>Loading data</Text>
    </View>
    
   </View>
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 img: {
  flex: 1,
 },
 imgLogo:{
    margin: 40
 },
 mainContainer: {
  flex: 1,
  justifyContent: 'space-around',
  alignItems: "center",
  marginBottom: 100,
 },
 text: {
  color: "#FFFF",
  fontSize: 15,
 },
});
