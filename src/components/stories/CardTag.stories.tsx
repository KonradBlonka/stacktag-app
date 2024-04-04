import { Meta, StoryFn } from "@storybook/react";
import CardTag, { CardTagProps } from "../CardTag";

export default {
  title: "Components/CardTag", // Group your stories
  component: CardTag,
} as Meta;

const Template: StoryFn<CardTagProps> = (args) => <CardTag {...args} />;

export const Default = Template.bind({}); // Name your story
Default.args = {
  item: {
    name: "Sample Field",
    count: 5,
  },
};
