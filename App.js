import * as React from "react";
import { AppLoading } from "expo";
import { bootstrap } from "./src/bootstrap";
import { AuthContext } from "./src/context";
import { AuthNavigation } from "./src/navigation/AuthNavigation";
import { AppTabNavigation } from "./src/navigation/AppTabNavigation";
import { MyLoader } from "./src/ui/MyLoader";

export default function App() {
 const [isReady, setIsReady] = React.useState(false);
 const [userToken, setUserToken] = React.useState(false);
 const [show, setShow] = React.useState(false);
 const [refresh, setRefresh] = React.useState(false);

 const authContext = React.useMemo(() => {
  return {
   signIn: () => {
    setUserToken(true);
   },
   refreshing: (r) => {
    setRefresh(r);
   },
   refresh: refresh,
  };
 });

 if (!isReady) {
  return (
   <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} />
  );
 }

 if (show) {
  return (
   <AuthContext.Provider value={authContext}>
    {userToken ? <AppTabNavigation /> : <AuthNavigation />}
   </AuthContext.Provider>
  );
 } else {
  return <MyLoader setShow={setShow} />;
 }
}

//const styles = StyleSheet.create({
////  container: {},
//});
//
