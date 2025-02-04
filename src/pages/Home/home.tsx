import React from "react";
import style from "./home.module.scss";
import { Menu } from "../../modules/menu";
import { MenuButton } from "../../modules/menu-button";
import { invoke } from "@tauri-apps/api/core";


const HomePage: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // 
    const [testText, setTestText] = React.useState("test");
    async function greet() {
        setTestText(await invoke("greet", { name }));
    }

    return (
        <div className={style.background} onClick={(e) => {e.stopPropagation(); setIsMenuOpen(false)}}>
            {!isMenuOpen && <MenuButton setIsMenuOpen={setIsMenuOpen} />}
            {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen}/>}
            <div className={style.testText}>
                <button onClick={() => {greet()}}>Нажать</button>
                <p>{testText}</p>
            </div>
        </div>
    )
};
export {HomePage};