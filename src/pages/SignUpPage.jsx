import styles from "./SignUpPage.module.css"
import videojuegos from '../videogames.json';

function SignUpPage(){
    return (
        <div>
            <div className={styles.title}>
                <h1>Registro de usuario</h1>
            </div>
            <div>
                <form action="">
                    <div className={styles.row}>
                        <label htmlFor="name">Nombre</label>
                        <br />
                        <input type="text" value="Primer nombre"/>
                        <input type="text" value="Primer apellido"/>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <label htmlFor="username">Nombre de usuario</label>
                        <br />
                        <input type="text" />
                    </div>
                    <br />
                    <div className={styles.row}>
                        <label htmlFor="email">Correo electrónico</label>
                        <br />
                        <input type="email" value="Email"/>
                    </div>
                    <br />
                    <div className={styles.row}>
                        <label htmlFor="password">Contraseña</label>
                        <br />
                        <input type="text" />
                    </div>
                    <br />
                    <div className={styles.row}>
                        <label htmlFor="videogame">Videojuego favorito</label>
                        <select name="" id="">
                            {videojuegos.map((videojuego) => (
                                <option key={videojuego.ID} value={videojuego.titulo}>
                                {videojuego.titulo}
                                </option>
                            ))}
                        </select>
                    </div>
                </form>
                <br />
                <div className={styles.signup_button}>
                    <button type="button">Registrarse</button>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage