import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticlePost from "./ArticlePost";

const basic: ComponentStory<any> = (args) => <ArticlePost {...args} />;

export const testName = basic.bind({});
testName.args = {
  imgName: "image-currency.jpg",
  h3Content: "Receive money in any currency with no fees",
  pContent:
    "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  author: "By Claire Robinson",
};

export const ArticleCase = basic.bind({});
ArticleCase.args = {
  imgName: "icon-online.svg",
  h3Content: "Online Banking",
  pContent:
    "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
};

export default {
  title: "molecules/articlePost",
  component: ArticlePost,
} as ComponentMeta<any>;
