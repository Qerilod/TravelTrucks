import s from "./Header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={s.container}>
      <h3 className={s.logo}>
        Travel<span className={s.span}>Trucks</span>
      </h3>
      <nav className={s.nav}>
        <Link to="/home" className={s.navLink}>
          Home
        </Link>
        <Link to="/catalog" className={s.navLink}>
          Catalog
        </Link>
      </nav>
    </div>
  );
};

export default Header;
