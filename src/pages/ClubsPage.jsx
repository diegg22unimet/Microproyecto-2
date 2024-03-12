import Card from "../Card";
import React, { useEffect, useState } from "react";
import { collection,doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from '../firebase';

export default function ClubsPage(){
    const [data, setData] = useState([]);

  useEffect(() => {
    const useClubs = async () => {
      try {
        const col = collection(db,'Clubes'); 
        const snapshot = await getDocs(col);
        const clubs = snapshot.docs.map(doc => doc.data());
        setData(clubs);
      } catch (error) {
        console.error('Error al obtener los datos de Firestore:', error);
      }
    };

    useClubs();
  }, []);

    return (

        <div>


            

                {data.map(({title,description,games}) =>(
                    <Card key={title} name={title} description={description} games={games}/>


                ))}
            {data.map((item, id) => (
          <li key={id}>{JSON.stringify(item)}</li>
        ))}
        </div>
    )
}