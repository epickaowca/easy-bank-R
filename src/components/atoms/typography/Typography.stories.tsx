import { ComponentMeta, ComponentStory } from "@storybook/react";
import Typography from "./Typography";

const basic: ComponentStory<any> = (args) => <Typography {...args} />;

export const heading1 = basic.bind({});
heading1.args = {
  textColor: "#2D314D",
  textTag: "h1",
  content: "Lorem ipsum dolor sit amet",
};

export const heading2 = basic.bind({});
heading2.args = {
  textColor: "#000000",
  textTag: "h3",
  content: "Lorem ipsum dolor sit amet, consectetur",
};

export const Paragraf = basic.bind({});
Paragraf.args = {
  textColor: "rgba(0,0,0,.7)",
  textTag: "p",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis accumsan velit, et dignissim tortor",
};

export const Link = basic.bind({});
Link.args = {
  textColor: "#000000",
  textTag: "a",
  href: "#Contact",
  content: "Contact",
};

export const IconLink = basic.bind({});
IconLink.args = {
  textTag: "a",
  href: "https://www.facebook.com/",
  icoName: "icon-facebook.svg",
  presentationCase: true,
};

export default {
  title: "atoms/typography",
  component: Typography,
  argTypes: {
    textColor: { control: "color" },
  },
} as ComponentMeta<any>;
