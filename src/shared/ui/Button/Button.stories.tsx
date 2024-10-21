import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ThemeButton } from "./Button";

const meta = {
    title: "shared/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        theme: [ThemeButton.CLEAR, ThemeButton.OUTLINE],
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Text",
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: "Text",
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: "Text",
    },
};
