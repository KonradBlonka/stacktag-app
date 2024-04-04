import { Meta, StoryFn } from "@storybook/react";
import CardTag, { CardTagProps } from "../CardTag";

export default {
  title: "Components/CardTag",
  component: CardTag,
} as Meta;

const Template: StoryFn<CardTagProps> = (args) => <CardTag {...args} />;

export const Card = Template.bind({});
Card.args = {
  item: {
    name: "Sample Field",
    count: 5,
  },
};
