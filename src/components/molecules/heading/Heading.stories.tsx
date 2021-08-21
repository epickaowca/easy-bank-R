import { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./Heading";

const basic: ComponentStory<any> = (args) => <Heading {...args} />;

export const standardHeading = basic.bind({});
standardHeading.args = {
  h1: "Latest Articles",
};

export const standardHeading2 = basic.bind({});
standardHeading2.args = {
  h1: "Why choose Easybank",
  p:
    "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
};

export const standardHeadin3 = basic.bind({});
standardHeadin3.args = {
  h1: "Next generation digital banking",
  p:
    "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.",
  button: "Request inivite",
};

export default {
  title: "molecules/heading",
  component: Heading,
} as ComponentMeta<any>;
