import type { Preview } from "@storybook/react";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [StyleDecorator, ThemeDecorator, RouterDecorator],
};

export const globalTypes = {
    theme: {
        name: "Theme",
        description: "Global theme for components",
        defaultValue: "light",
        toolbar: {
            // The icon for the toolbar item
            icon: "circlehollow",
            // Array of options
            items: [
                { value: "light", icon: "circlehollow", title: "light" },
                { value: "dark", icon: "circle", title: "dark" },
            ],
            // Property that specifies if the name of the item will be displayed
            showName: true,
        },
    },
};

export default preview;
