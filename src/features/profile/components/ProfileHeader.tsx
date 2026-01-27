import { useTranslation } from "react-i18next";
import type { User } from "../../auth/types";

interface Props {
    user: User;
}

export const ProfileHeader = ({ user }: Props) => {
    const { t } = useTranslation();

    const formattedDate = new Date(user.createdAt).toLocaleDateString(
        'en-US',
        { month: 'long', year: 'numeric' }
    )
    return (
        <div className="p-4 rounded-xl shadow-md bg-white/70 dark:bg-neutral-900/70">
            <h1 className="text-2xl font-bold">{t('settings.welcoming')} {user.username}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('settings.userSince')} {formattedDate}</p>

            {user.isPremium && (
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-yellow-400 text-white">
                    ⭐ Premium
                </span>
            )}
        </div>
    )
}