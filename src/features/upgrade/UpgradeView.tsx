import { UpgradeCards } from "./components/UpgradeCards";

const UpgradeView = () => {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Upgrade your plan</h1>
            <UpgradeCards />
        </div>
    )
};

export default UpgradeView;