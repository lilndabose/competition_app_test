import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import RoundedIconButton from "../components/Buttons/RoundedIconButton";
import Button from "../components/Buttons/Button";

export default function DoneScreen() {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 w-full h-full flex justify-center items-center`,
        { backgroundColor: "#09090970" },
      ]}
    >
      <View
        style={tw`w-11/12 h-2/5 bg-white rounded-3xl flex items-center justify-between py-2`}
      >
        <View
          style={tw`w-11/12 h-1/5 flex flex-row items-center justify-between`}
        >
          <RoundedIconButton iconName={"north-star"} iconLibrary="Octicons" />

          <RoundedIconButton
            iconName={"cross"}
            color={"black"}
            bg={"#F9FAFB"}
            iconLibrary="Entypo"
          />
        </View>
        <View style={tw`w-11/12 h-2/5 flex items-start justify-around`}>
          <Text style={tw`text-xl font-semibold`}>Welcome to Soo</Text>
          <Text style={tw`text-base`}>Great to have you with us!</Text>
        </View>

        <View style={tw`w-11/12 my-2`}>
          <Button text={"Got it"} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
}
