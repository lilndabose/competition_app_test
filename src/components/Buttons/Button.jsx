import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { styles } from "../../styles";
import tw from "tailwind-react-native-classnames";

export default function Button({ text, onPress, isPrimary = true, bg = null }) {
  return (
    <TouchableOpacity
      style={[
        tw`w-full h-16 rounded-full flex my-1 flex-row items-center justify-center`,
        !bg && isPrimary && styles.primaryBg,
        !bg && !isPrimary && styles.secondaryBg,
        bg && { backgroundColor: bg },
      ]}
      onPress={() => onPress()}
    >
      <Text style={tw`ml-2 text-white text-base`}>{text}</Text>
    </TouchableOpacity>
  );
}
