import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../../styles";
import tw from "tailwind-react-native-classnames";
import RoundedIconButton from "./RoundedIconButton";

export default function AuthIconButton({
  icon,
  text,
  isPrimary = true,
  onPress,
  bg = null,
}) {
  return (
    <TouchableOpacity
      style={[
        tw`w-full h-16 rounded-full flex my-1 flex-row items-center justify-between`,
        !bg && isPrimary ? styles.primaryBg : styles.secondaryBg,
        bg && `backgroundColor: ${bg}`,
      ]}
      onPress={() => onPress()}
    >
      <View style={tw`w-2/3 ml-4 flex flex-row items-center`}>
        {icon}
        <Text style={tw`ml-2 text-white text-base`}>{text}</Text>
      </View>
      <RoundedIconButton iconName={"arrowright"} isPrimary={isPrimary} />
    </TouchableOpacity>
  );
}
