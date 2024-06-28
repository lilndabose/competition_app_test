import TextInputs from "../src/components/TextInputs/TextInputs";

export default {
  title: "TextInput",
  component: TextInputs,
  argTypes: {
    secureTextEntry: { control: "boolean" },
    value: { control: "text" },
    placeholder: { control: "text" },
    hasIcon: { control: "boolean" },
    action: { control: "text" },
    setValue: { action: "pressed" },
    icon: { control: "text" },
    iconToggle: { control: "boolean" },
    iconSecondary: { control: "text" },
  },
};

export const Default = {
  args: {
    id: 1,
    secureTextEntry: false,
    value: "",
    placeholder: "Enter value ",
    hasIcon: false,
    action: "default",
  },
};

export const TextInputWithIcon = {
  args: {
    ...Default.args,
    hasIcon: true,
    icon: "search",
  },
};

export const HiddenTextField = {
  args: {
    ...Default.args,
    hasIcon: true,
    icon: "eye",
    iconToggle: true,
    iconSecondary: "eye-off",
  },
};
