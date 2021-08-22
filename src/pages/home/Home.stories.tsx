import { ComponentMeta, ComponentStory } from "@storybook/react";
import Home from "./Home";

export const StandardHome: ComponentStory<any> = () => <Home />;

export default {
  title: "pages/home",
  component: Home,
} as ComponentMeta<any>;
