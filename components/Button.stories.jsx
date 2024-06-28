import Button from "../src/components/Buttons/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: { control: "text" },
    onPress: { action: "pressed" },
    isPrimary: { control: "boolean" },
    bg: { control: "bg" },
  },
};

export const Default = {
  args: {
    id: 1,
    text: "Default Button",
    onPress: () => console.log("Button clicked"),
    isPrimary: true,
  },
};

export const PrimaryButton = {
  args: {
    ...Default.args,
    text: "Primary Button",
  },
};

export const SecondaryButton = {
  args: {
    ...Default.args,
    text: "Secondary Button",
    isPrimary: false,
  },
};

export const CustomButtonBg = {
  args: {
    ...Default.args,
    text: "Custom Background Color",
    bg: "red",
  },
};
