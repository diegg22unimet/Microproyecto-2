import{ signInWithPopup, createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {auth, googleProvider} from '../firebase'
import styles from "./SignUpPage.module.css"
import videojuegos from '../videogames.json';
import { useState } from 'react';

function SignUpPage(){
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [game, setGame] = useState('');

    const handleRegister = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth,email,password)
          console.log('Usuario registrado:', userCredential.user);
        } catch (error) {
          console.error('Error al registrar usuario:', error);
        }
      };

    async function handleClick() {
        const result = await signInWithPopup(auth,googleProvider);
        console.log('Usuario registrado con Google:',result.user);
    }

    return (
        <div>
            <header>
                <nav className={styles.navbar}>
                    <ul className={styles.pages}>
                        <li><a href="./home">Home</a></li>
                        <li><a href="./">Sign In</a></li>
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
                                <input type="text" placeholder="Primer nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                                <input type="text" placeholder="Primer apellido" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="username">Nombre de usuario</label>
                            <br />
                            <input type="text" placeholder="Usuario" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="email">Correo electrónico</label>
                            <br />
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br />
                        <div className={styles.row}>
                            <label htmlFor="password">Contraseña</label>
                            <br />
                            <input type="text" placeholder="Contraseña (Al menos 6 digitos)" value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                        <button onClick={handleRegister} type="button" className={styles.signup_button}><a href="./home">Registrarse</a></button>
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