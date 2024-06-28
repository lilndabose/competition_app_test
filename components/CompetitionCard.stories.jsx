import CompetitionCard from "../src/components/CompetitionCard";

export default {
  title: "CompetitionCard",
  component: CompetitionCard,
  argTypes: {
    edition: { control: "text" },
    date: { control: "text" },
    locations: { control: "array" },
    onPress: { action: "pressed" },
  },
};

export const Default = {
  args: {
    id: 1,
    edition: "",
    date: null,
    locations: [],
    onPress: () => console.log("card clicked !!!"),
  },
};

export const CardWithData = {
  args: {
    ...Default.args,
    edition: "20th Asian Game - Achi Nagoya 2022 (Winter)",
    date: new Date().toDateString(),
    locations: ["Pyeongchang", "Gangwon-do", "Korea"],
  },
};
