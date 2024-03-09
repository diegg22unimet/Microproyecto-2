import { collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getClubs(){
    const clubsCollection = collection(db,'Clubes');
    const clubsSnapshot = await getDocs(clubsCollection);

    const clubs = clubsSnapshot.docs.map((doc)=>doc.data());
    console.log(clubs);

    return clubs;
}