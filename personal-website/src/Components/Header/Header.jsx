import styles from './Header.module.css'

function Header () {
    return (
        <div className={styles.header}>
            <p>Based out of Oregon</p>
            <h1> <span className={styles.cs}>Computer Science</span> Student <br />
                passionate to apply my skills</h1>
            <div className={styles.greeting}>
                <p>Hi, my name is Kaedin and I am ready to Code!</p>
            </div>
            <div className={styles.buttons}>
                <button>Projects</button>
                <button>Download CV</button>
            </div>
            
        </div>
    )
}

export default Header;