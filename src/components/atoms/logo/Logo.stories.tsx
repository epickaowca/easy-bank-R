import { ComponentMeta, ComponentStory } from "@storybook/react";
import Logo from "./Logo";

const basic: ComponentStory<any> = (args) => <Logo {...args} />;

export const standardLogo = basic.bind({});

export const whiteCaseLogo = basic.bind({});
whiteCaseLogo.args = {
  whiteCase: true,
};

export default {
  title: "atoms/logo",
  component: Logo,
} as ComponentMeta<any>;
