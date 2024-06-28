import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedIconButton from "../components/Buttons/RoundedIconButton";
import TextInput from "../components/TextInputs/TextInputs";
import { CompetitionsList } from "../constants/data";
import CompetitionCard from "../components/CompetitionCard";

export default function CompetitionList({ navigation, route }) {
  const [search, setSearch] = useState("");
  const [dataList, setDataList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const updateValueState = (action = null, text) => {
    const arr = [...dataList].filter(
      (item) =>
        item?.edition?.toLowerCase()?.includes(text.toLowerCase()) ||
        item?.locations?.join(" ")?.toLowerCase()?.includes(text.toLowerCase())
    );
    setSearchList([...arr]);
    setSearch(text);
  };

  const selectCompetition = (competition) => {
    navigation.navigate("SignupScreen", {
      competition: JSON.stringify(competition),
    });
  };

  useEffect(() => {
    const { continent } = route.params;
    const arr = CompetitionsList?.filter(
      (item) => item?.continent?.toLowerCase() == continent?.toLowerCase()
    );
    setDataList([...arr]);
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`w-11/12 h-full flex self-center`}>
        <View style={tw`w-full flex flex-row items-center justify-center`}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={tw`flex items-center justify-center`}
          >
            <RoundedIconButton
              iconName={"arrowleft"}
              color={"black"}
              border="border-0 mt-4"
              bg={"#F9FAFB"}
            />
          </Pressable>
          <View style={tw`w-5/6`}>
            <TextInput
              placeholder={"Search ..."}
              value={search}
              action={"search"}
              setValue={updateValueState}
              hasIcon={true}
              icon={"search"}
            />
          </View>
        </View>
        <View style={tw`mt-4 ml-2`}>
          <Text style={tw`text-3xl font-medium`}>Competition</Text>
          <Text style={tw`text-base font-normal mt-2`}>
            An account is needed per one host. If you already have an account
            for the host of competition you want to sign up, you can login and
            register.
          </Text>

          <ScrollView>
            {!search
              ? dataList?.map((item, index) => (
                  <CompetitionCard
                    onPress={() => selectCompetition(item)}
                    key={index}
                    edition={item?.edition}
                    locations={item?.locations}
                  />
                ))
              : searchList?.map((item, index) => (
                  <CompetitionCard
                    onPress={() => selectCompetition(item)}
                    key={index}
                    edition={item?.edition}
                    locations={item?.locations}
                  />
                ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
