import styles from "./Hello.module.css"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Link, Outlet } from "react-router-dom";

export function Hello() {
    return (
        <>
            <span className={styles.span}>
                <p>
                    <Link to="/" className={styles.a}>samuel-leite</Link>
                </p>
            </span>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
