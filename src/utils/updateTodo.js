import db from "./firebase";
import { doc, updateDoc } from "firebase/firestore"

const updateTodo = async (id, text) => {
  const docRef = doc(db, "todo", id)
  await updateDoc(docRef, {
    text : text
  })
}

const toggleTodo = async (id, prev) => {
  const docRef = doc(db, "todo", id)
  await updateDoc(docRef, {
    isDone : !prev
  })
}
export {updateTodo, toggleTodo}