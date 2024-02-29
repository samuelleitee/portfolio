import styles from "./Header.module.css"

export function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <li><a href="">samuel-leite</a></li>
                    <li><a href="">_hello</a></li>
                    <li><a href="">_about-me</a></li>
                    <li><a href="">_projects</a></li>
                    <li><a href="">_contact-me</a></li>
                </ul>
            </nav>
        </header>
    )
}