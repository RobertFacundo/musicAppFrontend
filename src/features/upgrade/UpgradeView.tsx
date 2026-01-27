import { useTranslation } from "react-i18next";
import { UpgradeCards } from "./components/UpgradeCards";

const UpgradeView = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-full flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl tracking-tight font-bold mb-10 text-white text-center">
                {t('upgrade.title')}
            </h1>
            <UpgradeCards />
            <div className="
                mt-8
                text-center
                text-xs
                text-black
                dark:text-neutral-400
                max-w-md
                mx-auto
            ">
                <p className="font-semibold mb-1">Demo</p>
                <p>
                    {t('upgrade.demo')}
                    <br />
                    {t('upgrade.useCard')} <span className="font-mono">4242 4242 4242 4242</span> with any future date and CVC.
                </p>
            </div>
        </div>
    )
};

export default UpgradeView;