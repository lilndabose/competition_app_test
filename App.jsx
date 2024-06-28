import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "./src/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {ROUTES?.map((screen, index) => (
            <Stack.Screen
              key={screen.route + index.toString()}
              name={screen.route}
              component={screen.component}
              options={{ headerShown: false }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig.extra.storybookEnabled === "true") {
  AppEntryPoint = require("./.storybook").default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AppEntryPoint;
