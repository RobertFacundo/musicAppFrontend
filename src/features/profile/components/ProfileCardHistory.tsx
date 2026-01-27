import type { User } from "../../auth/types";
import { HistoryRow } from "./HistoryRow";
import { useHistoryNavigation } from '../hooks/useHistoryNavigation';
import { useTranslation } from "react-i18next";

interface Props {
    history: User['history'];
}

export const ProfileCardHistory = ({ history }: Props) => {
    const { t } = useTranslation();
    const { goToHistoryItem } = useHistoryNavigation()
    
    return (
        <div className="p-4 rounded-xl shadow-md bg-white/70 dark:bg-neutral-900/70">
            <h3 className="font-bold mb-2 text-center">Historial</h3>
            {history.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    {t('settings.historialYet')}
                </p>
            ) : (
                <ul className="space-y-2 h-100 overflow-y-auto">
                    {history.map((item, index) => (
                        <HistoryRow
                            key={`${item.type}-${item.deezerId}-${index}`}
                            item={item}
                            onClick={goToHistoryItem}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};