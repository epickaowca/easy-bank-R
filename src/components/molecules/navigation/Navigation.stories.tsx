import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navigation from "./Navigation";

const basic: ComponentStory<any> = (args) => <Navigation {...args} />;

export const HeaderCase = basic.bind({});
HeaderCase.args = {
  navItems: [
    { content: "Home", href: "#home" },
    { content: "About", href: "#about" },
    { content: "Contact", href: "#contact" },
  ],
};

export default {
  title: "molecules/navigation",
  component: Navigation,
} as ComponentMeta<any>;
