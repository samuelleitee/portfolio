import styles from "./Sidebar.module.css";

// Icons 
import personal from "../../assets/svg/personal-info-icon.svg";
import professional from "../../assets/svg/professional-info-icon.svg";
import hobbies from "../../assets/svg/hobbies-icon.svg";

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <header>
        <a href="/">samuel-leite</a>
      </header>

      <div className={styles.informations}>
        <div>
          <img src={personal} alt="" />
          <img src={professional} alt="" />
          <img src={hobbies} alt="" />
        </div>
      </div>
    </aside>
  );
}