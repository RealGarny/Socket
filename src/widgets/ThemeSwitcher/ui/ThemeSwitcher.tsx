import { Theme, useTheme } from "app/providers/ThemeProvider";
import * as cls from "./ThemeSwitcher.module.scss";
import classNames from "shared/lib/classNames/classNames";
import Moon from "shared/assets/icons/moon.svg";
import Sun from "shared/assets/icons/sun.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

//interface ThemeSwitcherProps extends React.ComponentProps<"div"> {}

export const ThemeSwitcher = ({ className }: React.HtmlHTMLAttributes<HTMLDivElement>) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <div>
            <Button
                theme={ThemeButton.CLEAR}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
            >
                {theme === Theme.LIGHT ? <Moon /> : <Sun />}
            </Button>
        </div>
    );
};
