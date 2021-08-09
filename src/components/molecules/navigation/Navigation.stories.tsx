import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navigation from "./Navigation";

const basic: ComponentStory<any> = (args) => <Navigation {...args} />;

export const HeaderCase = basic.bind({});
HeaderCase.args = {
  navItems: [
    { content: "Home", href: "#home" },
    { content: "About", href: "#about" },
    { content: "Contact", href: "#contact" },
    { content: "Blog", href: "#blog" },
    { content: "Careers", href: "#careers" },
  ],
};

export const FooterCase = basic.bind({});
FooterCase.args = {
  footerCase: true,
  navItems: [
    { content: "About Us", href: "#about" },
    { content: "Contact", href: "#contact" },
    { content: "Blog", href: "#blog" },
    { content: "Careers", href: "#careers" },
    { content: "Suport", href: "#support" },
    { content: "Privacy Policy", href: "#policy" },
    { content: "Lorem", href: "#lorem" },
    { content: "Lorem ipsum", href: "#ipsum" },
  ],
};

export default {
  title: "molecules/navigation",
  component: Navigation,
} as ComponentMeta<any>;
