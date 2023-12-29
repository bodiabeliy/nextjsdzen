import { useTranslation } from "next-i18next";

const HomeScreen = () => {
    const {t} =useTranslation("home")    
    return ( 
        <>{t("title")}</>
     );
}
 
export default HomeScreen;