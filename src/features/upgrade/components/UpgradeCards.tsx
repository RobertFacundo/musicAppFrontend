import { PremiumCard } from "./PremiumCard";
import { FreeCard } from "./FreeCard";

export const UpgradeCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
        <FreeCard />
        <PremiumCard />
    </div>
)