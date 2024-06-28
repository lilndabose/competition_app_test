import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { ASSETS } from "../assets";
import tw from "tailwind-react-native-classnames";

export default function CompetitionCard({
  edition,
  locations,
  date = null,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={tw`w-full h-44 flex self-center my-2`}
      onPress={() => onPress()}
    >
      <ImageBackground
        source={ASSETS.bg}
        style={tw`flex-1 justify-center items-center`}
        imageStyle={{ resizeMode: "cover" }}
      >
        <View
          style={[
            tw`w-full h-full opacity-90 rounded-xl flex justify-center items-center`,
            { backgroundColor: "#253BFF" },
          ]}
        >
          <View style={tw`w-4/6 h-4/6`}>
            <Text style={tw`text-white text-base font-medium`}>{edition}</Text>
            <Text style={[tw`font-normal mt-4`, { color: "#FFFFFF" }]}>
              {!date ? "" : "YYYY-MM-DD ~ YYYY-MM-DD"}
            </Text>
            <Text style={[tw`mt-1`, { color: "#B8BFFF" }]}>
              {locations.join(" ,")}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}
