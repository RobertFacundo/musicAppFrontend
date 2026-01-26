import { useUpgrade } from "../hook/useUpgrade";

export const PremiumCard = () => {
    const { mutate, isLoading } = useUpgrade();

    return (
        <div className="
                p-6 rounded-xl shadow-xl
                bg-white/40 dark:bg-neutral-900/40
                border border-yellow-400/40
                flex flex-col
                relative
            ">
            <span className="absolute -top-3 right-4 text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-bold">
                BEST VALUE
            </span>
            <h3 className="dark:text-white text-xl font-bold mb-4 flex items-center gap-2">Premium</h3>

            <ul className="flex-1 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• No ads</li>
                <li>• Unlimited skips</li>
                <li>• Premium badge</li>
            </ul>

            <button
                onClick={() => mutate()}
                disabled={isLoading}
                className="
                        mt-6 premium-gradient w-full p-2 rounded-lg
                        font-semibold
                        cursor-pointer
                        hover:scale-[1.03] transition
                        disabled:opacity-60 disabled:cursor-not-allowed
                    "
            >
                {isLoading ? 'Redirecting...' : 'Upgrade'}
            </button>
        </div>
    )
};