
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase';

export async function loginWithCredencials(email, password){
    try {
        const {user} = await signInWithEmailAndPassword(auth,email,password);
        return user;
    } catch (e) {
        console.error(e);
        return null;
    }
}