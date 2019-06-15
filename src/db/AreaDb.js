import db from './db';
import store from '../store/store.js';
const areasRef = db.collection('areas');

// Initialize realtime listener which persists the data to the store.
areasRef.onSnapshot((querySnapshot) => {
  const areas = [];
  querySnapshot.forEach((doc) => {
    areas.push(doc.data());
  });
  store.dispatch('area/setareas', areas);
});


// When pushing any objects to firestore I make sure to use Object.assign in case it is a custom js object since firestore doesn't accept them.
export default {
  createarea(area) {
    return areasRef.add(Object.assign({}, area));
  },    
  updatearea(area, areaId) {
    return areasRef.doc(areaId).update(Object.assign({}, area));
  },    
  setarea() {
    return areasRef.doc(areaId).set(Object.assign({}, area));
  },    
  deletearea() {
    return areasRef.doc(areaId).delete();
  },
};
