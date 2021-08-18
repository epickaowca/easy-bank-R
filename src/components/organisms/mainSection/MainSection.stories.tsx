import { ComponentMeta, ComponentStory } from "@storybook/react";
import MainSection from "./MainSection";

const basic: ComponentStory<any> = (args) => <MainSection {...args} />;

export const Benefits = basic.bind({});
Benefits.args = {
  h1: "Why choose Easybank",
  p:
    "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
  case: "benefits",
};

export default {
  title: "organisms/MainSection",
  component: MainSection,
} as ComponentMeta<any>;
