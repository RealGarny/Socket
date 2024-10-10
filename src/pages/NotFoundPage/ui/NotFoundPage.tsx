import { useTranslation } from "react-i18next";
import * as cls from "./NotFoundPage.module.scss";
import classNames from "shared/lib/classNames/classNames";

export const NotFoundPage = ({ className }: React.ComponentProps<"div">) => {
    const { t } = useTranslation();
    return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t("PageNotFound")}</div>;
};
