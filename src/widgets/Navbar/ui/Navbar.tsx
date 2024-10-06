import  * as cls from "./Navbar.module.scss"
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink"
import React from "react"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import classNames from "shared/lib/classNames/classNames"


export const Navbar = ({className}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <ThemeSwitcher/>
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                className={cls.mainLink}
                to={'/'}
            >Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                о сайте
            </AppLink>
        </div>
    </div>
)