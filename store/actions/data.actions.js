import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

export const READDATA = 'READDATA';

// export const readData = async () => {
//     const data = await getDocs(collection(db, "prueba"));
//     setProba(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
// }

export const readData = () => {
    return async dispatch => {
        const data = await getDocs(collection(db, "prueba"));
        const proba = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(proba)
        dispatch({
            type: READDATA,
            proba
        })
    }
}