import styles from './ProfilePage.module.css';

function ProfilePage() {
    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./signup">Sign Up</a></li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default ProfilePage