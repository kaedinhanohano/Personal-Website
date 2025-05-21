import styles from './Bubble.module.css'

function Bubbles () {
    return (
        <div className={styles.header}>
            <div className={styles.bubbles}>
                <div className={styles.one}></div>
                <div className={styles.two}></div>
                <div className={styles.three}></div>
            </div>
        </div>
    )
}

export default Bubbles;