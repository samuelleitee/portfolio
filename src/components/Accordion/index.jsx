import styles from "./Accordion.module.css";

export function Accordion({ children, title }) {
  return (
    <details className={styles.details}>
      <summary>{title}</summary>
      <div>{children}</div>
    </details>
  );
}

import Markdown from "../../assets/svg/markdown.svg";
import Email from "../../assets/svg/email.svg";
import Phone from "../../assets/svg/phone.svg";

export function AccordionElement({ icon, text }) {
    let iconComponent;
    switch (icon) {
        case "markdown":
            iconComponent = Markdown;
          break;

        case "email":
            iconComponent = Email;
          break;

        case "phone":
            iconComponent = Phone;
          break;

        default:
          break;
      
    }
  return (
    <div className={styles.element}>
      <img
        src={iconComponent}
        alt=""
      />

      <p>{text}</p>
    </div>
  );
}
