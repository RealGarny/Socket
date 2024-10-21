import classNames from "shared/lib/classNames/classNames";
import * as cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: string;
}

export const Button = (props: ButtonProps) => {
    const { className, theme, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme!]])}
            {...otherProps}
        ></button>
    );
};
