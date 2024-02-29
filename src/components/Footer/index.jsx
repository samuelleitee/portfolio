import styles from "./Footer.module.css";
import linkedin from "../../assets/images/svg/linkedin.svg";
import github from "../../assets/images/svg/github.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul>
          <li>find me in:</li>
          <li>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="">
              @samuelleitee <img src={github} alt="github" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
