import { useAppDispatch, useAppSelector } from "../../../shared/redux/hooks";
import { toggleTheme } from "../../../shared/redux/themeSlice";
import { Link } from "react-router-dom";

export const ProfileSettings = () => {
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme.mode);

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
                to='/upgrade'
                className="block w-full text-center mt-2 p-2 rounded-lg bg-yellow-500 text-white"
            >
                Upgrade to premium
            </Link>
        </div>
    )
}