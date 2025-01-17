import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    // design: {
    //   type: "figma", // Set the design tool to Figma
    //   url: "https://www.figma.com/design/hdnqWI05SUcNYDjyjkkWYS/Untitled?node-id=1-19&t=D2VyOdk1XS1JJIy7-4", // Replace with your Figma URL
    // },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    size: "medium",
  },
  parameters: {
    design: {
      type: "figspec", // Set the design tool to Figma
      url: "https://www.figma.com/design/bvKX0K1xOeIsno3WGFAbge/Untitled?node-id=5-5&t=D2VyOdk1XS1JJIy7-4", // Replace with your Figma URL
      accessToken: process.env.FIGMA_ACCESS_TOKEN || "",
    },
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
