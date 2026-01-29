import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import { toggleTheme } from "../../../shared/redux/themeSlice";
import { Link } from "react-router-dom";
import { useMe } from "../../auth/hooks/useQueries";
import { useTranslation } from "react-i18next";

export const ProfileSettings = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);
    const { t, i18n } = useTranslation();

    const { data: user } = useMe();
    const isPremium = user?.isPremium

    const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en'
        i18n.changeLanguage(newLang)
        localStorage.setItem('lang', newLang)
    }

    return (
        <div className="p-4 rounded-xl shadow-md  w-full min-h-[200px] flex flex-col bg-white/70 dark:bg-neutral-900/70">
            <h3 className="font-bold mb-2">{t('settings.title')}</h3>
            <button
                onClick={() => dispatch(toggleTheme())}
                className="block w-full mb-2 p-2 rounded-lg border cursor-pointer"
            >
                {t('settings.theme')}: {theme}
            </button>
            <button
                className="block w-full mb-2 p-2 rounded-lg border cursor-pointer"
                onClick={changeLanguage}
            >
                {t('settings.language')}:{i18n.language.toUpperCase()}
            </button>

            <Link
                to={isPremium ? '#' : '/upgrade'}
                className={`
                block w-full text-center mt-2 p-2 rounded-lg
                premium-gradient
                ${isPremium ? "opacity-50 pointer-events-none" : "hover:scale-[1.02] transition"}
                `}
            >
                {isPremium ? t('settings.premium') : t('settings.upgrade')}
            </Link>
        </div>
    )
}