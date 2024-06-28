import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";
import tw from "tailwind-react-native-classnames";
import { AntDesign, Octicons, Entypo } from "@expo/vector-icons";

export default function RoundedIconButton({
  size = 24,
  color = "white",
  iconName,
  isPrimary = true,
  bg = null,
  border = "border border-gray-300",
  iconLibrary = "AntDesign",
}) {
  return (
    <View
      style={[
        tw`mr-1 w-14 h-14 flex justify-center items-center ${border} p-2 rounded-full`,
        !bg && isPrimary ? styles.primaryBg : styles.secondaryBg,
        bg && { backgroundColor: bg },
      ]}
    >
      {iconLibrary == "AntDesign" && (
        <AntDesign name={iconName} size={size} color={color} />
      )}
      {iconLibrary == "Octicons" && (
        <Octicons name={iconName} size={24} color={color} />
      )}
      {iconLibrary == "Entypo" && (
        <Entypo name={iconName} size={24} color={color} />
      )}
    </View>
  );
}
