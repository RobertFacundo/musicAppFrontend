import { useTranslation } from "react-i18next";

export const FreeCard = () => {
  const { t } = useTranslation();

  return (
    <div className="
    p-6 rounded-xl shadow-md
    bg-white/40 dark:bg-neutral-900/40
    border border-neutral-200/40 dark:border-neutral-700/40
    flex flex-col
    opacity-90
  ">
      <h3 className="text-lg font-semibold mb-4 text-neutral-700 border-b border-neutral-200/40 dark:border-neutral-700/40 dark:text-neutral-300">Free</h3>
      <ul className="flex-1 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
        <li>{t('freeCard.ads')}</li>
        <li>{t('freeCard.skips')}</li>
        <li>{t('freeCard.features')}</li>
      </ul>

      <div className="mt-6 text-center text-sm text-neutral-500">
        {t('freeCard.current')}
      </div>
    </div>
  )
};