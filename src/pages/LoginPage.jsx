import{ signInWithPopup} from "firebase/auth";
import {auth, googleProvider} from '../firebase'
import { useUser } from "../context/user";
import { loginWithCredencials } from "../controllers/auth";
import styles from "./LoginPage.module.css"

function LoginPage(){
    const user = useUser();

    async function handleClick() {
        const result = await signInWithPopup(auth,googleProvider);
        console.log(result);
    }

    const handleLogin = async () => {
        const user = await loginWithCredencials(email,password)


    }

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
            <div className={styles.info}>
                <div className={styles.title}>
                    <h1>Inicio de Sesión</h1>
                </div>
                <div>
                    <form action="">
                        <div className={styles.row}>
                            <label htmlFor="email">Correo electrónico</label>
                            <br />
                            <input type="email" placeholder="Email" />
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="password">Contraseña</label>
                            <br />
                            <input type="password" placeholder="Contraseña"/>
                        </div>
                    </form>
                    <div className={styles.button__row}>
                        <button onClick={handleLogin}>  Iniciar Sesión  </button>
                        <button onClick={handleClick} className={styles.btn__google}></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage