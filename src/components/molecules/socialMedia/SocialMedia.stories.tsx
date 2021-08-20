import { ComponentStory, ComponentMeta } from "@storybook/react";
import SocialMedia from "./SocialMedia";

export const standardSocialMedia: ComponentStory<any> = (args) => (
  <SocialMedia {...args} />
);
standardSocialMedia.args = {
  presentationCase: true,
  socialTab: [
    { icoName: "icon-facebook.svg", href: "#" },
    { icoName: "icon-instagram.svg", href: "#" },
    { icoName: "icon-twitter.svg", href: "#" },
    { icoName: "icon-youtube.svg", href: "#" },
    { icoName: "icon-pinterest.svg", href: "#" },
  ],
};

export default {
  title: "molecules/socialMedia",
  component: SocialMedia,
} as ComponentMeta<any>;
