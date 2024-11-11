import db from "./firebase"
import {collection, getDocs} from "firebase/firestore"

const getTodo = async () => {
  const toDos = []
  const querySnapshot = await getDocs(collection(db, "todo"))
  querySnapshot.forEach(doc => {
    toDos.push(doc.data())
  })
  return toDos // 모두 담아서 반환
}

export default getTodo