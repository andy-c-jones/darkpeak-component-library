import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../..";

const meta = {
  title: "Design System/Atoms/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    title: "Card Title",
    description: "This is a card",
  },
};