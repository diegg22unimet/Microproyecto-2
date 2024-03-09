import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getVideogames(){
    const videogamesCollection = collection(db,'Videojuegos');
    const videogamesSnapshot = await getDocs(videogamesCollection);

    const videogames = videogamesSnapshot.docs.map((doc)=>doc.data());
    console.log(videogames);

    return videogames;
}