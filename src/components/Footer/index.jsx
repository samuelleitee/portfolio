import styles from "./Footer.module.css";
import linkedin from "../../assets/svg/linkedin.svg";
import github from "../../assets/svg/github.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>find me in:</p>

      <nav>
        <ul>
          <li>
            <a href="https://linkedin.com/in/samuel-leite-pereira" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/samuelleitee" target="_blank">
              @samuelleitee
              <img src={github} alt="github" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
