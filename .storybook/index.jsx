import AsyncStorage from "@react-native-async-storage/async-storage";
import { view } from "./storybook.requires";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppRegistry } from "react-native";

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
});

const StorybookRoot = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <StorybookUIRoot />
  </GestureHandlerRootView>
);

export default StorybookRoot;
