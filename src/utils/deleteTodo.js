import db from "./firebase";
import { doc, deleteDoc } from "firebase/firestore";


const deleteTodo = async (id) => {
  await deleteDoc(doc(db, "todo", id));
}

export default deleteTodo