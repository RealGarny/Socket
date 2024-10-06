import { useState } from "react"
import * as cls from "./Sidebar.module.scss"
import classNames from "shared/lib/classNames/classNames"

export enum SideparCollapseWidth {
    ICON = "iconCollapsed",
    FULL = "collapsed",
}

export interface SidebarProps extends React.ComponentProps<"div"> {
    renderCollapsed? :boolean;
    collapseWidth?: SideparCollapseWidth
}

export const Sidebar = (props: SidebarProps) => {
    const {className, renderCollapsed, collapseWidth} = props,
        [collapsed, setCollapsed] = useState<boolean>(renderCollapsed ? renderCollapsed : false);

    function handleToggle() {
        setCollapsed(!collapsed);
    }

    const collapseType:string = collapseWidth ? cls[collapseWidth] : cls[SideparCollapseWidth.FULL];

    return (
        <div className={classNames(cls.Sidebar, {[collapseType]: collapsed}, [className])}>
            <button onClick={handleToggle}>toggle</button>
            {props.children}
        </div>
    )
}