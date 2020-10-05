import * as Font from "expo-font";

export async function bootstrap() {
  await Font.loadAsync({
    "open-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "open-light": require("../assets/fonts/OpenSans-Light.ttf"),
    "open-regular": require("../assets/fonts/OpenSans-Regular.ttf"),
  });
}
