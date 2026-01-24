import { useUpgrade } from "../hook/useUpgrade";

export const PremiumCard = () => {
    const { mutate, isLoading } = useUpgrade();

    return (
        <div >
            <h3 className="text-xl font-bold">Premium</h3>
            <ul className="my-4">
                <li>No ads</li>
                <li>Unlimited skips</li>
                <li>Premium badge</li>
            </ul>

            <button onClick={() => mutate()}
                disabled={isLoading}
                className="premium-gradient w-full p-2 rounded-lg"
            >
                {isLoading ? 'Redirecting...' : 'Upgrade'}
            </button>
        </div>
    )
};