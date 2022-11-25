import styles from '../styles/components/medias.module.css'

export function Medias() {
    return( 
        <>
        <ul className={styles.wrapper}>
            <li className={styles.iconFacebook}> 
                <span className={styles.tooltip}>LinkedIn</span>
                <a href='https://www.linkedin.com/in/mariana-pires-dev'><span><i className={styles.facebook}></i></span></a>
            </li>
            <li className={styles.iconTwitter}>
            <span className={styles.tooltip}>Github</span>
            <a href='https://www.github.com/mariprs'><span><i className={styles.twitter}></i></span></a>
            </li>
        </ul>
      </>) }