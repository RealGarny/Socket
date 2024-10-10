import { useTranslation } from "react-i18next";

export const BugButton: React.FC = () => {
    const { t } = useTranslation();

    return <button>{t("error.throw_error")}</button>;
};
