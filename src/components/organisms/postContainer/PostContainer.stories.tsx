import { ComponentMeta, ComponentStory } from "@storybook/react";
import PostContainer from "./PostContainer";

const basic: ComponentStory<any> = (args) => <PostContainer {...args} />;

export const standard = basic.bind({});

export const postCase = basic.bind({});
postCase.args = {
  postCase: true,
};

export default {
  title: "organisms/postContainer",
  component: PostContainer,
} as ComponentMeta<any>;
