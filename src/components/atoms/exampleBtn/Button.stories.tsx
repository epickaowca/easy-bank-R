import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

const basic: ComponentStory<any> = (args) => <Button {...args} />;

export const standardButton = basic.bind({});
standardButton.args = {
  content: "example",
};

export default {
  title: "atoms/avatar",
  component: Button,
} as ComponentMeta<any>;
