import { useTranslation } from "next-i18next";

const Loader = () => {
  const {t} = useTranslation("common")
  return (
    <div className="flex items-center absolute top-0 bottom-0 right-0 left-0 justify-center">
        <div className="flex flex-col space-x-2 justify-center items-center bg-white h-screen dark:invert w-[700px] h-[300px]">
          <span className="">{t("loader")}</span>
          <div className="flex mt-4">
            <div className="h-5 w-5 mr-2 bg-[#8bc34a] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-5 w-5 mr-2 bg-[#8bc34a] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-5 w-5 bg-[#8bc34a] rounded-full animate-bounce"></div>
          </div>
        </div>
    </div>
  );
};

export default Loader;
