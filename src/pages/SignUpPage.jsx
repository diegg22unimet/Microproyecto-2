import{ signInWithPopup} from "firebase/auth";
import {auth, googleProvider} from '../firebase'
import styles from "./SignUpPage.module.css"
import videojuegos from '../videogames.json';

function SignUpPage(){

    async function handleClick() {
        const result = await signInWithPopup(auth,googleProvider);
        console.log(result);
    }

    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./login">Sign In</a></li>
                    </ul>
                </nav>
            </header>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h1>Registro de usuario</h1>
                </div>
                <div>
                    <form action="">
                        <div className={styles.row}>
                            <label htmlFor="name">Nombre</label>
                            <br />
                            <div className={styles.names}>
                                <input type="text" placeholder="Primer nombre"/>
                                <input type="text" placeholder="Primer apellido"/>
                            </div>
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="username">Nombre de usuario</label>
                            <br />
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="email">Correo electrónico</label>
                            <br />
                            <input type="email" placeholder="Email" />
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="password">Contraseña</label>
                            <br />
                            <input type="text" placeholder="Contraseña" />
                        </div>
                        <br />
                        <div>
                            <div className={styles.videogames}>
                                <label htmlFor="videogame" className={styles.videogame__label}>Videojuego favorito</label>
                                <select name="" id="">
                                    {videojuegos.map((videojuego) => (
                                        <option key={videojuego.ID} value={videojuego.titulo}>
                                            {videojuego.titulo}
                                        </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                    </form>
                    <br />
                    <br />
                    <p className={styles.parr}>¿Ya tienes una cuenta? <a href="./login">Entra aquí</a></p>
                    <br />
                    <div className={styles.signup_button}>
                        <button type="button">Registrarse</button>
                    </div>
                    <div>
                        <button onClick={handleClick} className={styles.btn__google}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage