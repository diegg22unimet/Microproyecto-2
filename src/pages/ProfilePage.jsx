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
            <div className={styles.profileContainer}>
                <div className={styles.image}>
                    <img src="../../public/user.png" alt="" />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.h2_name}>Nombre Apellido</h2>
                    <p>Nombre de usuario</p>
                    <p>Correo electrónico</p>
                    <p>Videojuego favorito</p>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage