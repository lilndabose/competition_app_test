import RoundedIconButton from "../src/components/Buttons/RoundedIconButton";

export default {
  title: "RoundedIconButton",
  component: RoundedIconButton,
  argTypes: {
    size: { control: "number" },
    color: { control: "text" },
    onPress: { action: "pressed" },
    iconName: { control: "text" },
    isPrimary: { control: "boolean" },
    bg: { control: "text" },
  },
};

export const Default = {
  args: {
    id: 1,
    size: 24,
    color: "white",
    iconName: "arrowright",
    isPrimary: true,
    bg: null,
    onPress: () => console.log("clicked"),
  },
};

export const RoundedWithoutBg = {
  args: {
    ...Default.args,
    bg: "transparent",
    color: "black",
  },
};

export const RoundedCustomBg = {
  args: {
    ...Default.args,
    bg: "black",
    color: "white",
    border: "border-0",
  },
};
