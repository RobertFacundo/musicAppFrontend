import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { toggleTheme } from "../../redux/themeSlice";

const Header = () => {
    const dispatch = useAppDispatch()
    return (
        <header>
            <button onClick={() => dispatch(toggleTheme())}>
                Toggle Theme
            </button>
            <Link to='/'>Home</Link>
            <Link to='/profile'>Profile</Link>
        </header>
    )
};

export default Header;