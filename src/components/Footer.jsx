import styles from '../styles/components/footer.module.css'


export function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <p className={styles.footerText}>
                Feito por <a href='https://www.github.com/mariprs'>/Mariprs</a>
            </p>
        </footer>
    )
}