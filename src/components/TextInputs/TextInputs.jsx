import { View, Text } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { styles } from "../../styles";
import { TextInput } from "react-native-gesture-handler";

export default function TextInputs({
  secureTextEntry = false,
  value,
  placeholder,
  hasIcon = false,
  action,
  setValue,
  icon,
  iconToggle = false,
  iconSecondary,
}) {
  const [toggleIcon, setToggleIcon] = useState(true);
  return (
    <View
      style={[
        tw`w-full flex flex-row items-center justify-around`,
        styles.textwrapperinput,
      ]}
    >
      <TextInput
        style={[hasIcon ? styles.textshortinput : styles.textfullinput]}
        value={value}
        placeholder={placeholder}
        onChangeText={(text) => setValue(action, text)}
        secureTextEntry={
          secureTextEntry ? (toggleIcon ? false : true) : secureTextEntry
        }
      />

      {hasIcon && iconToggle && (
        <Feather
          name={toggleIcon ? icon : iconSecondary}
          size={24}
          color="black"
          onPress={() => setToggleIcon((toggleIcon) => !toggleIcon)}
        />
      )}
      {hasIcon && !iconToggle && (
        <Feather name={icon} size={24} color="black" />
      )}
    </View>
  );
}
