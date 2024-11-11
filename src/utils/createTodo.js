import db from "./firebase"
import {doc, setDoc} from "firebase/firestore"

import {collection, addDoc} from "firebase/firestore"

// setDoc로 id지정하고 추가?
// setDoc(docRef, data) 
// docRef = doc(db, collection, docId)
/*
const docRef1 = doc(db, "todo", "id")
const createTodo = async () => {
  await setDoc(docRef1, {
    text : "new todo by setDoc"
  })
}
  */
 
/*
// addDoc로 무작위 id생성하고 추가
// addDoc(collectionRef, data) 
// 이건 해당 collection에 data를 추가하고 무작위 docRef를 반환하는듯함
// id필드 : 무작위docRef 로 넣은 data를 넣어야하므로 순서에 안맞는듯?
const docRef2 = await addDoc(collection(db, "todo"), {
  text : "new todo by addDoc"
  // id :  docRef2
}) 
*/


// 무작위 doc참초를 만들고 이후에 data를 추가하는 방식을 사용하면될듯함
const createTodo = async (text) => {
  const docRef3 = doc(collection(db, "todo")) // 무작위 docRef를생성한다.
  console.log(docRef3);
  await setDoc(docRef3, {
    text : text,
    id : docRef3["_key"].path.segments[1],
    isDone : false
  })
}

export default createTodo
// read는 다불러오니깐 상관없음
// create는 위3가지중 마지막2가지로 하면될듯,
// update, delete 는 docRef가 필요함!! 
// document의 필드에 id : "docRef"형식으로 주는게 좋을듯 