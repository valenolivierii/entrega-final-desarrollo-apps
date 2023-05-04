import { useFonts } from "expo-font";
import { init } from "./src/db";
import { ActivityIndicator } from "react-native";
import AppNavigator from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  init().then(() => {
    console.log("Initialized database")
  }).catch((err) =>{
    console.log("Initializing database failed")
    console.log(err)
  })

  const [loaded] = useFonts({
    "Star-Regular": require("./assets/fonts/Star-Regular.ttf"),
    "Star-Doble": require("./assets/fonts/Star-Doble.ttf"),
    "Star-White": require("./assets/fonts/Star-White.ttf"),
    Dos: require("./assets/fonts/Dos.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
