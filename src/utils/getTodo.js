import db from "./firebase"
import {collection, getDocs, query, orderBy} from "firebase/firestore"

const getTodo = async () => {
  // const toDos = []
  const todo = collection(db, "todo")
  const result = await getDocs(query(todo, orderBy("time", "asc")))
  const boards = result.docs.map((el) => el.data());
  return boards
}

export default getTodo