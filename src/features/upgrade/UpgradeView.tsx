import { UpgradeCards } from "./components/UpgradeCards";

const UpgradeView = () => {
    return (
        <div className="min-h-full flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl tracking-tight font-bold mb-10 text-white text-center">
                Upgrade your plan
            </h1>
            <UpgradeCards />
        </div>
    )
};

export default UpgradeView;