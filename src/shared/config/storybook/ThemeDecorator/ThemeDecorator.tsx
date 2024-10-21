import { Decorator } from "@storybook/react";
import "app/styles/index.scss";

export const ThemeDecorator: Decorator = (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme;

    const previevBlockStyles = {
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        padding: "1rem",
    };

    return (
        <div style={previevBlockStyles} className={`app ${theme}`}>
            <Story />
        </div>
    );
};
