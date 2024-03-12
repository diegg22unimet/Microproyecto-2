import{ signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";
import {auth, googleProvider} from '../firebase'
import { useUser } from "../context/user";
import { loginWithCredencials } from "../controllers/auth";
import styles from "./LoginPage.module.css"
import { useState } from 'react';

function LoginPage(){
    const user = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logear = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(email, password);
          console.log('Usuario ha iniciado sesión:', userCredential.user);
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      };

    async function handleClick() {
        const result = await signInWithPopup(auth,googleProvider);
        console.log("Se inicio sesion con Google",result);
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
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="password">Contraseña</label>
                            <br />
                            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </form>
                    <div className={styles.button__row}>
                        <button onClick={logear}>  <a href="./home">Iniciar Sesión</a>  </button>
                        <button onClick={handleClick} className={styles.btn__google}></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginPage