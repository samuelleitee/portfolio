import { useState } from "react";
import styles from "./Sidebar.module.css";

// Icons
import personal from "../../assets/svg/personal-info-icon.svg";
import professional from "../../assets/svg/professional-info-icon.svg";
import hobbies from "../../assets/svg/hobbies-icon.svg";

import { Accordion, AccordionElement } from "./../Accordion/index";
import { Link } from "react-router-dom";

export function Sidebar() {
  const path = window.location.pathname

  return (
    <aside className={styles.aside}>
      <header>
        <Link to="/">samuel-leite</Link>
      </header>

      <div className={styles.informations}>
        <div>
          <Link to="professional" className={path === "/professional" ? styles.linkActive : styles.link}>
            <img src={professional} alt="" />
          </Link>

          <Link to="personal" className={path === "/personal" ? styles.linkActive : styles.link}>
            <img src={personal} alt="" />
          </Link>

          <Link to="hobbies" className={path === "/hobbies" ? styles.linkActive : styles.link}>
            <img src={hobbies} alt="" />
          </Link>
        </div>

        <div>
          <Accordion title="personal-info">
            <AccordionElement icon="markdown" text="high-school" />
            <AccordionElement icon="markdown" text="university" />
          </Accordion>

          <Accordion title="contacts">
            <AccordionElement
              icon="email"
              text="leitepereira.samuel@gmail.com"
            />
            <AccordionElement icon="phone" text="+5511959310989" />
          </Accordion>
        </div>
      </div>
    </aside>
  );
}
