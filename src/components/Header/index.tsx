import "./styles.css";
import imgHome from "../../assets/home.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="nav-container">
                    <div className="dflex">
                        <NavLink to="/home" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                            Início
                        </NavLink>
                        <NavLink to="/products" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                            Produtos
                        </NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? "nav-menu-item menu-active": "nav-menu-item"}>
                            Sobre nós
                        </NavLink>
                    </div>
                    <NavLink to="/home">
                        <img src={imgHome} alt="Home" />
                    </NavLink>
                </div>

            </div>
        </header>
    );
}