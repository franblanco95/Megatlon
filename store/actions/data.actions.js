import { db } from '../../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

export const READDATA = 'READDATA';
export const CREATEDATA = 'CREATEDATA';

// export const readData = async () => {
//     const data = await getDocs(collection(db, "prueba"));
//     setProba(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
// }

export const readData = () => {
    return async dispatch => {
        const data = await getDocs(collection(db, "prueba"));
        const proba = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        dispatch({
            type: READDATA,
            proba
        })
    }
}

export const createData = (nuevoNombre) => {
    return async dispatch => {
        await addDoc(collection(db, "prueba"), { name: nuevoNombre })
        dispatch({
            type: CREATEDATA,
        })
    }

}