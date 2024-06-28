import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundedIconButton from "../components/Buttons/RoundedIconButton";
import SelectCountry from "../components/SelectCountry";
import Checkbox from "expo-checkbox";
import Button from "../components/Buttons/Button";
import TextInput from "../components/TextInputs/TextInputs";
import { Feather } from "@expo/vector-icons";

const SignupScreen = ({ navigation, route }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isCountrySelected, seIsCountrySelected] = useState(true);
  const [competition, setCompetion] = useState({});
  const [passwordErrors, setPasswordErrors] = useState({
    checkone: false,
    checktwo: false,
  });
  const [isChecked, setChecked] = useState(false);
  const [values, setValues] = useState([
    {
      email: "",
      error: false,
    },
    {
      password: "",
      error: false,
    },
    {
      cpassword: "",
      error: false,
    },
    {
      fname: "",
      error: false,
    },
    {
      lname: "",
      error: false,
    },
  ]);

  const updateValueState = (action, value) => {
    let arr = [...values];
    arr.forEach((item) => {
      const isActionFound = Object.keys(item).some((itm) => itm === action);
      if (isActionFound && action == "error") {
        item["error"] = !item["error"];
        return;
      }
      if (isActionFound) {
        item[action] = value;
        return;
      }
    });

    setValues([...arr]);
  };

  const getValue = (key) => {
    let arr = [...values];
    const obj = arr.find((item) =>
      Object.keys(item).some((itm) => itm === key)
    );
    if (obj) {
      return obj;
    }

    return {};
  };

  const registerUser = () => {
    const arr = [...values];
    if (!selectedCountry || !competition) {
      seIsCountrySelected(false);
    } else {
      seIsCountrySelected(true);
    }

    arr.forEach((item) => {
      const key = Object.keys(item)[0];
      switch (key) {
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          item["error"] = !emailRegex.test(item[key]) ? true : false;
          break;
        case "password":
          let error = { ...passwordErrors };
          error.checkone = item[key].length < 8 ? true : false;
          const passwordRegex =
            /^(?=(.*[A-Z]){3,})(?=(.*[a-z]){3,})(?=(.*\d){3,})(?=(.*[~`!@#$%^&*()_\-+=?]){3,}).*$/;
          error.checktwo = !passwordRegex.test(item[key]) ? true : false;
          if (error.checkone || error.checktwo) {
            item["error"] = true;
            setPasswordErrors({ ...error });
          } else {
            item["error"] = false;
          }
          break;
        case "cpassword":
          item["error"] =
            getValue("password")?.password !== item[key] ? true : false;
          break;
        case "fname":
          item["error"] = item[key]?.length <= 0 ? true : false;
          break;
        case "lname":
          item["error"] = item[key]?.length <= 0 ? true : false;
          break;
      }
    });

    const isError = arr.some((item) => item?.error);
    if (isError) {
      setValues([...arr]);
    } else {
      let obj = {};
      values.forEach((item) => {
        const key = Object.keys(item)[0];
        if (key !== "cpassword") {
          obj[key] = item[key];
        }
        obj["competition"] = competition;
      });

      alert(JSON.stringify(obj, null, 2));

      navigation.navigate("DoneScreen", {
        userdata: selectedCountry,
      });
    }
  };

  useEffect(() => {
    if (selectedCountry) {
      navigation.navigate("CompetitionList", {
        continent: selectedCountry,
      });
    }
  }, [selectedCountry]);

  // get selected competition
  useEffect(() => {
    if (!route.params) {
      return;
    } else {
      const { competition } = route.params;
      setCompetion({ ...JSON.parse(competition) });
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`w-11/12 h-full flex self-center`}>
          <View style={tw`w-full flex flex-row items-center justify-start`}>
            <Pressable onPress={() => navigation.goBack()}>
              <RoundedIconButton
                iconName={"arrowleft"}
                color={"black"}
                bg={"transparent"}
              />
            </Pressable>
            <Text style={tw`text-2xl font-bold ml-2`}>Create Account</Text>
          </View>
          <View style={tw`w-full flex items-start justify-center`}>
            <SelectCountry setSelectedCountry={setSelectedCountry} />
            {!isCountrySelected && (
              <Text style={tw`text-red-700 text-base`}>
                You must pick a competition to register
              </Text>
            )}
          </View>

          <View style={tw`w-full flex items-start justify-center`}>
            <TextInput
              placeholder={"ex: email@gmail.com *"}
              value={getValue("email")?.email}
              action={"email"}
              setValue={updateValueState}
              hasIcon={false}
            />

            {getValue("email")?.error && (
              <Text style={tw`text-red-700 text-base`}>
                Email format is invalid
              </Text>
            )}
          </View>

          <View style={tw`w-full flex items-start justify-center`}>
            <TextInput
              placeholder={"Enter password ...*"}
              value={getValue("password")?.password}
              action={"password"}
              setValue={updateValueState}
              hasIcon={true}
              icon={"eye"}
              secureTextEntry={true}
              iconToggle={true}
              iconSecondary={"eye-off"}
            />
          </View>

          <View style={tw`w-full flex items-start justify-center`}>
            <TextInput
              placeholder={"Confirm password ...*"}
              value={getValue("cpassword")?.cpassword}
              action={"cpassword"}
              setValue={updateValueState}
              hasIcon={true}
              icon={"eye"}
              secureTextEntry={true}
              iconToggle={true}
              iconSecondary={"eye-off"}
            />

            {getValue("password")?.error && passwordErrors?.checkone && (
              <View style={tw`w-full flex flex-row items-center`}>
                <Feather name="check" size={24} color="darkred" />
                <Text style={tw`ml-4 text-red-700 text-base`}>
                  At least 8 letters
                </Text>
              </View>
            )}

            {getValue("password")?.error && passwordErrors?.checktwo && (
              <View style={tw`w-full flex flex-row items-center`}>
                <Feather name="check" size={24} color="darkred" />
                <Text style={tw`ml-4 text-red-700 text-base`}>
                  Include at least 3 uppercase letters, lowercase letters,
                  number, or special letters
                </Text>
              </View>
            )}

            {getValue("password")?.error && (
              <Text style={tw`text-red-700 text-base`}>
                {"Special letters are only limited to (~`!@#$%^&*()_-+=?)"}
              </Text>
            )}

            {getValue("cpassword")?.error && (
              <Text style={tw`text-red-700 text-base`}>
                New password and Confirm password do not match.
              </Text>
            )}
          </View>

          <View style={tw`w-full flex items-start justify-center`}>
            <TextInput
              placeholder={"First Name in English *"}
              value={getValue("fname")?.fname}
              action={"fname"}
              setValue={updateValueState}
              hasIcon={false}
            />
            {getValue("fname")?.error && (
              <Text style={tw`text-red-700 text-base`}>
                This is a required field.
              </Text>
            )}
          </View>

          <View style={tw`w-full flex items-start justify-center`}>
            <TextInput
              placeholder={"Last Name in English *"}
              value={getValue("lname")?.lname}
              action={"lname"}
              setValue={updateValueState}
              hasIcon={false}
            />

            {getValue("lname")?.error && (
              <Text style={tw`text-red-700 text-base`}>
                This is a required field.
              </Text>
            )}
          </View>

          <View style={tw`w-full h-20 flex flex-row justify-start py-4`}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#253BFF" : undefined}
            />
            <View style={tw`flex flex-col ml-4 relative bottom-1.5`}>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-lg text-gray-500 font-normal`}>
                  By signing up, I agree to Cloit's{" "}
                </Text>
                <Text style={tw`underline text-lg text-gray-500 font-normal`}>
                  Terms &
                </Text>
              </View>
              <View style={tw`flex flex-row`}>
                <Text style={tw`underline text-lg text-gray-500 font-normal`}>
                  Conditions
                </Text>
                <Text style={tw` text-lg text-gray-500 font-normal`}>
                  {" "}
                  Conditions{" "}
                </Text>
                <Text style={tw`underline text-lg text-gray-500 font-normal`}>
                  Privacy Policy.
                </Text>
              </View>
            </View>
          </View>

          <Button text={"Sign Up"} onPress={() => registerUser()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
