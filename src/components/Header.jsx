import styles from '../styles/components/header.module.css'

export function Header(props){
    return(
     <div className={styles.headerContainer}>
        <h1 className={styles.headerTitleOne}>{props.title}</h1>
        <button className={styles.headerTitle}>{props.button}</button>
        <h2 className={styles.headerTitleTwo}>{props.subtitle}</h2>
        <img className={styles.headerImage} src={props.image} />
     </div>   
    )
}