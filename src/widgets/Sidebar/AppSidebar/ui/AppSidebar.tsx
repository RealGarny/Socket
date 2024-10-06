import { Sidebar, SidebarProps, SideparCollapseWidth } from "shared/ui/Sidebar/Sidebar"
import * as cls from "./AppSidebar.module.scss"
import classNames from "shared/lib/classNames/classNames"

//export interface AppSidebarProps extends SidebarProps {}

export const AppSidebar = (props: SidebarProps) => {
    const {children, className, ...otherProps} = props;
    return (
        <Sidebar collapseWidth={SideparCollapseWidth.ICON} className={classNames(cls.AppSidebar, {}, [className])} {...otherProps}>
            {children}
        </Sidebar>
    )
}