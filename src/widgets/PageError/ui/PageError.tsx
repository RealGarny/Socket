import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button/Button";

export const PageError = ({ className }: React.ComponentProps<"div">) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames("", {}, [className])}>
            <p>{t("uncaught_error_occured")}</p>
            <Button onClick={reloadPage}>{t("update_page")}</Button>
        </div>
    );
};
