import { useTranslation } from "react-i18next";
import classNames from "shared/lib/classNames/classNames";

const MainPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div
            className={classNames("main", { creature: true, animal: true, human: false }, [
                "hello",
                "world",
            ])}
        >
            {t("welcome_to_main")}
        </div>
    );
};

export default MainPage;
