import { ComponentMeta, ComponentStory } from "@storybook/react";
import HeroSection from "./HeroSection";

export const standardSection: ComponentStory<any> = () => <HeroSection />;

export default {
  title: "organisms/heroSection",
  component: HeroSection,
} as ComponentMeta<any>;
