import s from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={s.containerImg}>
      <div className={s.container}>
        <h1 className={s.title}>Campers of your dreams</h1>
        <h2 className={s.text}>
          You can find everything you want in our catalog
        </h2>
        <NavLink to="/catalog" className={s.button}>
          View Now
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
