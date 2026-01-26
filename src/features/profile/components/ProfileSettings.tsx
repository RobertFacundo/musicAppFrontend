import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import { toggleTheme } from "../../../shared/redux/themeSlice";
import { Link } from "react-router-dom";
import { useMe } from "../../auth/hooks/useQueries";

export const ProfileSettings = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

    const { data: user } = useMe();
    const isPremium = user?.isPremium

    return (
        <div className="p-4 rounded-xl shadow-md  w-full min-h-[200px] flex flex-col bg-white/70 dark:bg-neutral-900/70">
            <h3 className="font-bold mb-2">Settings</h3>
            <button
                onClick={() => dispatch(toggleTheme())}
                className="block w-full mb-2 p-2 rounded-lg border cursor-pointer"
            >
                Theme: {theme}
            </button>
            <button
                className="block w-full mb-2 p-2 rounded-lg border"
            >
                Language
            </button>

            <Link
                to={isPremium ? '#' : '/upgrade'}
                className={`
                block w-full text-center mt-2 p-2 rounded-lg
                premium-gradient
                ${isPremium ? "opacity-50 pointer-events-none" : "hover:scale-[1.02] transition"}
                `}
            >
                {isPremium ? "You are Premium 👑" : "Upgrade to Premium"}
            </Link>
        </div>
    )
}