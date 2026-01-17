import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from 'react-icons/fa'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/40 dark:bg-neutral-900/40 shadow-md">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                <h1 className="font-bold text-lg text-neutral-900 dark:text-white">Music App</h1>
                <div className="flex gap-6">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center gap-2 font-medium transition
                    ${isActive
                                ? "text-black dark:text-white text-2xl"
                                : "text-white-600 dark:text-neutral-300 hover:text-yellow-500"
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
                                : 'text-white-600 dark:text-neutral-300 hover:text-yellow-500'
                            }`}
                    >
                        <FaUser />
                    </NavLink>
                </div>
            </nav>
        </header>
    )
};

export default Header;