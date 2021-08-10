import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

const basic: ComponentStory<any> = (args) => <Button {...args} />;

export const standardButton = basic.bind({});
standardButton.args = {
  content: "request frame",
};

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<any>;
