import type { Meta, StoryObj } from "@storybook/react";

import { AppSidebar } from "./AppSidebar";

const meta = {
    title: "widgets/AppSidebar",
    component: AppSidebar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Default: Story = {
    args: {},
};
