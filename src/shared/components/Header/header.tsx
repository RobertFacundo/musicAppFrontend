import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from 'react-icons/fa'
import Search from "../Search/Search";
import { useMe } from "../../../features/auth/hooks/useQueries";

const Header = () => {
    const { data: user } = useMe();
    const isPremium = user?.isPremium;

    return (
        <header className="sticky top-0 z-50 bg-white/40 dark:bg-neutral-900/40 shadow-md">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="font-bold text-lg text-neutral-900 dark:text-white">Music App</h1>
                <Search />
                <div className="flex gap-6">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition
                    ${isActive
                                ? "text-black dark:text-white text-2xl"
                                : "text-white-600 dark:text-neutral-300 hover:text-red-300"
                            }
                    `
                        }
                    >
                        <FaHome />
                    </NavLink>

                    <NavLink
                        to='/profile'
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition
                    ${isActive
                                ? 'text-black dark:text-white text-2xl'
                                : 'text-white-600 dark:text-neutral-300 hover:text-red-300'
                            }`}
                    >
                        <FaUser />
                        {isPremium && (
                            <img src="/premium.png" alt="Premium Badge" className="absolute -top-2 -right-2 w-5 h-5"/>
                        )}
                    </NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header;