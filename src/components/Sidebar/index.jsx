import styles from "./Sidebar.module.css";

// Icons
import personal from "../../assets/svg/personal-info-icon.svg";
import professional from "../../assets/svg/professional-info-icon.svg";
import hobbies from "../../assets/svg/hobbies-icon.svg";
import { Accordion, AccordionElement } from "./../Accordion/index";

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <header>
        <a href="/">samuel-leite</a>
      </header>

      <div className={styles.informations}>
        <div>
          <a href="/" className={styles.linkActive}>
            <img src={professional} alt="" />
          </a>
          <a href="/" className={styles.link}>
            <img src={personal} alt="" />
          </a>
          <a href="/" className={styles.link}>
            <img src={hobbies} alt="" />
          </a>
        </div>

        <div>
          <Accordion title="personal-info">
            <AccordionElement icon="markdown" text="high-school"/>
            <AccordionElement icon="markdown" text="university"/>
          </Accordion>

          <Accordion title="contacts">
            <AccordionElement icon="email" text="leitepereira.samuel@gmail.com"/>
            <AccordionElement icon="phone" text="+5511959310989"/>
          </Accordion>
        </div>
      </div>
    </aside>
  );
}
