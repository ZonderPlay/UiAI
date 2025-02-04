import React from "react";
import style from "./menu.module.scss";
import { Link } from "react-router-dom";

interface MenuProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({setIsMenuOpen}) => {

    return (
        <div className={style.menu}>
            <button className={style.closeMenuButton} onClick={(e) => {e.stopPropagation(); setIsMenuOpen(false)}}>X</button>
                <ul>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/settings">Настройки</Link>
                    </li>
                </ul>
           </div>
    )
};
export {Menu};