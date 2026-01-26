import { UpgradeCards } from "./components/UpgradeCards";

const UpgradeView = () => {
    return (
        <div className="min-h-full flex flex-col items-center justify-center px-6">
            <h1 className="text-4xl tracking-tight font-bold mb-10 text-white text-center">
                Upgrade your plan
            </h1>
            <UpgradeCards />
            <div className="
                mt-8
                text-center
                text-xs
                text-neutral-500
                dark:text-neutral-400
                max-w-md
                mx-auto
            ">
                <p className="font-semibold mb-1">Demo mode</p>
                <p>
                    This upgrade flow uses Stripe test mode.
                    <br />
                    Use card <span className="font-mono">4242 4242 4242 4242</span> with any future date and CVC.
                </p>
            </div>
        </div>
    )
};

export default UpgradeView;