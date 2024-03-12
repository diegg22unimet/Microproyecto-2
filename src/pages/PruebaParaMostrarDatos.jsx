import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection,doc, getDoc, getDocs, setDoc } from "firebase/firestore";


const PruebaParaMostrarDatos = () => {
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
      <h2>Clubes:</h2>
      <ul>
        {data.map((item, id) => (
          <li key={id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PruebaParaMostrarDatos;