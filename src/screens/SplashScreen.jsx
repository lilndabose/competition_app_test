import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";
import tw from "tailwind-react-native-classnames";
import { ASSETS } from "../assets";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AuthIconsButton from "../components/Buttons/AuthIconButton";

export default function SplashScreen({ navigation }) {
  return (
    <View style={tw`flex-1 relative`}>
      <Video
        source={ASSETS.background}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={StyleSheet.absoluteFill}
      />
      <View style={tw`flex-1 justify-center items-center`}>
        <View
          style={tw`w-full h-full flex justify-center items-center flex-col`}
        >
          <View style={tw`w-5/6 h-1/6 flex justify-end mt-4`}>
            <Text
              style={tw`text-3xl font-semibold tracking-tighter text-white`}
            >
              Soo
            </Text>
            <Text
              style={tw`text-3xl font-semibold tracking-tighter text-white`}
            >
              and Carrots
            </Text>
          </View>

          <View style={tw`w-full h-5/6 flex items-center justify-end `}>
            <LinearGradient
              colors={["rgba(22, 23, 24, 0)", "#161718"]}
              start={[0, 0]}
              end={[0, 1]}
              locations={[0, 0.695]}
              style={tw`w-full h-3/6 flex flex-col items-center justify-center`}
            >
              <View
                style={tw`w-5/6 h-2/6 flex flex-col items-center justify-center`}
              >
                <AuthIconsButton
                  onPress={() => navigation.navigate("SignupScreen")}
                  icon={<MaterialIcons name="login" size={24} color="white" />}
                  text={"Signup for free"}
                />

                <AuthIconsButton
                  icon={<AntDesign name={"mail"} size={24} color="white" />}
                  text={"Continue with Email"}
                  iconName={"mail"}
                  isPrimary={false}
                />
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}
