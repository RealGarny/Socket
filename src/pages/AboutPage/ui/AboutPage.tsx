import { useTranslation } from "react-i18next";


const AboutPage:React.FC = () => {
    const {t} = useTranslation('about');
    return(
        <div>{t('about_website')}</div>
    )
}

export default AboutPage;