import { useState } from "react";
import * as cls from "./Sidebar.module.scss";
import classNames from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

export enum SideparCollapseWidth {
    ICON = "iconCollapsed",
    FULL = "collapsed",
}

export interface SidebarProps extends React.ComponentProps<"div"> {
    renderCollapsed?: boolean;
    collapseWidth?: SideparCollapseWidth;
}

export const Sidebar = (props: SidebarProps) => {
    const { className, renderCollapsed, collapseWidth } = props;
    const [collapsed, setCollapsed] = useState<boolean>(renderCollapsed ? renderCollapsed : false);
    const { t } = useTranslation();

    function handleToggle() {
        setCollapsed(!collapsed);
    }

    const collapseType: string = collapseWidth
        ? cls[collapseWidth]
        : cls[SideparCollapseWidth.FULL];
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [collapseType]: collapsed }, [className])}
        >
            <button
                className={classNames(cls.test)}
                data-testid="sidebar-toggle"
                onClick={handleToggle}
            >
                {t("toggle")}
            </button>
            {props.children}
        </div>
    );
};
