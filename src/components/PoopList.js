import { getFirestore, doc, onSnapshot } from "firebase/firestore";
const db = getFirestore();

const unsub = onSnapshot(
  doc(db, "cities", "SF"), 
  { includeMetadataChanges: true }, 
  (doc) => {
    // ...
  });
const PoopList = () => {
  return <div>List</div>
}

export default PoopList;