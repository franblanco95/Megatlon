import { db } from '../../firebase';
import { collection, getDocs, addDoc } from "firebase/firestore";

export const READ_TURNO = 'READ_TURNO';
export const CREATE_TURNO = 'CREATE_TURNO';

// export const readData = async () => {
//     const data = await getDocs(collection(db, "prueba"));
//     setProba(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
// }

export const readTurno = () => {
    return async dispatch => {
        const data = await getDocs(collection(db, "turnos"));
        const turno = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        dispatch({
            type: READ_TURNO,
            turno
        })
    }
}

export const createTurno = (hourSelected, daySelected, deporteName) => {
    return async dispatch => {
        await addDoc(collection(db, "turnos"), { hora: hourSelected, dia: daySelected, deporte: deporteName })
        dispatch({
            type: CREATE_TURNO,
        })
    }

}