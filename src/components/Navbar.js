import React from "react";
import { ReactComponent as Moon } from "../assets/moon.svg";
import { ReactComponent as Sun } from "../assets/sun.svg";

const Navbar = ({ theme, setTheme }) => {
    const toggleTheme = currentTheme => {
        currentTheme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <nav className={theme === "light" ? "navbar light" : "navbar dark"}>
            {theme === "light" ? (
                <Moon onClick={() => toggleTheme(theme)} />
            ) : (
                <Sun onClick={() => toggleTheme(theme)} />
            )}

            <h1>Notes App</h1>
        </nav>
    );
};

export default Navbar;
