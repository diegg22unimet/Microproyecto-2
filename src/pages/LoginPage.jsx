import{ signInWithPopup} from "firebase/auth";
import {auth, googleProvider} from '../firebase'
import { useUser } from "../context/user";
import { loginWithCredencials } from "../controllers/auth";

export default function LoginPage(){
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
            <button onClick={handleLogin}>  Iniciar Sesion  </button>

            <button onClick={handleClick}>  Iniciar Sesion con Google  </button>

        </div>

    )
}