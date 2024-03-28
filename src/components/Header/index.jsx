import styles from "./Header.module.css"

import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><Link to="/">_hello</Link></li>
                    <li><Link to="/about-me">_about-me</Link></li>
                    <li><Link to="/projects">_projects</Link></li>
                    <li><Link to="/contact-me">_contact-me</Link></li>
                </ul>
            </nav>
        </header>
    )
}