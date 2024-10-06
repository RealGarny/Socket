import { Link, LinkProps } from "react-router-dom"
import * as cls from "./AppLink.module.scss"
import classNames from "shared/lib/classNames/classNames"

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    theme?:AppLinkTheme
}

export const AppLink = (props: AppLinkProps) => {
    const {className, to, children, theme=AppLinkTheme.PRIMARY, ...otherProps} = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}