import type { User } from "../../auth/types";

interface Props {
    favorites: User['favorites'];
}

export const ProfileCardFavorites = ({ favorites }: Props) => {
    return (
        <div className="p-4 rounded-xl shadow-md bg-white/70 dark:bg-neutral-900/70">
            <h3 className="font-bold mb-2 text-center">Favorites</h3>

            {favorites.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    No favorites songs yet
                </p>
            ) : (
                <ul className="space-y-2">
                    {favorites.map((songId) => (
                        <li key={songId} className="border p-2 rounded">
                            {songId}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};