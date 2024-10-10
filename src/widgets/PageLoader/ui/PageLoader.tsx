import * as cls from "./PageLoader.module.scss";
import classNames from "shared/lib/classNames/classNames";

export const PageLoader = ({ className }: React.ComponentProps<"div">) => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <div className={classNames(cls.loader)}></div>
        </div>
    );
};
