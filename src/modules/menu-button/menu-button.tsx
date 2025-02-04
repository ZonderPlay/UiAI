import style from "./menu-button.module.scss";

interface MenuButtonProps {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const MenuButton: React.FC<MenuButtonProps> = ({setIsMenuOpen}) => {
    return (
        <button onClick={(e) => {e.stopPropagation(); setIsMenuOpen(true)}} className={style.menuButton}>
            <div className={style.menuButton__line}></div>
            <div className={style.menuButton__line}></div>
            <div className={style.menuButton__line}></div>
        </button>
    )
}
export {MenuButton}