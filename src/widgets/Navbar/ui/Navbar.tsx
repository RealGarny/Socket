import * as cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import React from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import classNames from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

export const Navbar = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={"/"}>
                    {t("main_label")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
                    {t("about_label")}
                </AppLink>
            </div>
        </div>
    );
};
