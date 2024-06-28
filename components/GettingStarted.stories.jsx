import { Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import { ASSETS } from "../src/assets";

const StarterComponent = () => (
  <View style={tw`flex flex-1 justify-around items-center`}>
    <Image source={ASSETS.doc2} style={tw`w-full `} />
    <View style={tw`w-full flex justify-center items-center`}>
      <Text style={tw`text-2xl font-bold text-yellow-900`}>Competition</Text>
      <Text style={tw`text-2xl font-bold text-yellow-900`}>
        Full App Documentation
      </Text>
      <Text style={tw`text-base mt-4 text-center`}>
        You can have complete information my components function, props and even
        try customizing them to your easy try it out.
      </Text>
    </View>
  </View>
);

const meta = {
  title: "Competition Components",
  component: StarterComponent,
};

export default meta;

export const GettingStarted = {
  args: {},
  parameters: {
    noBackground: true,
  },
};
