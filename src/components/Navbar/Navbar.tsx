import { NavLink } from "react-router-dom";
import { FaBloggerB } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import "./Navbar.scss";
import { useContext } from "react";
import DarkModeContext from "../../context/DarkModeContext";
import AuthContext from "../../context/AuthContext";
const Navbar = () => {
    
    const { isLoggedIn,logout } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
        <nav
            id="app-nav"
            className="sm:gap-10 shadow-lg p-8 gap-4 flex align-middle items-center justify-center bg-fuchsia-50 text-fuchsia-900 dark:bg-fuchsia-900 dark:text-fuchsia-50"
        >
            <NavLink to="/home">
                <FaBloggerB />
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <div className="flex-1"></div>
            <div className="hidden sm:flex sm:items-center sm:gap-10">
                {isLoggedIn && <NavLink to="/posts">Posts</NavLink>}
                {isLoggedIn && <button onClick={()=>{
                    logout();
                }}>Logout</button>}
                {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
                {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
                <a href="https://github.com/">
                    <AiFillGithub />
                </a>
                <button
                    onClick={() => {
                        toggleDarkMode()
                    }}
                >
                    {darkMode ? <BsSunFill /> : <BsMoonFill />}
                </button>
            </div>
        </nav>
    );
};
export default Navbar;