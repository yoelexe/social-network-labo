// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// escucha y traer los cambios de los datos -> getDocs
import {
  getFirestore, // conexión
  collection, // crear una tabla con los datos
  addDoc, // añadir documentos
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  query,
  orderBy,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

import {
  getDatabase,
} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyACdLyMpGhBbp5ogyQ2z2-GeDWz4orx4Z4',
  authDomain: 'foodmatch-5bf52.firebaseapp.com',
  databaseURL: 'https://foodmatch-5bf52-default-rtdb.firebaseio.com/',
  projectId: 'foodmatch-5bf52',
  storageBucket: 'foodmatch-5bf52.appspot.com',
  messagingSenderId: '655316254171',
  appId: '1:655316254171:web:2bb64d10e33715580a7bfe',
};

// Initialize Firebase console.log(app)
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Conexión a la base de datos
const db = getFirestore(app);
// Conexión a RealTime Database
export const database = getDatabase(app);
// Guardar publicación en firestore

export const saveTask = (description) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${mm}-${dd}-${yyyy}`;
  addDoc(collection(db, 'post'), {
    description,
    date: today,
    likes: [],
    username: auth.currentUser.email,
  });
  // nombre de la colección 'post',
  // donde se van a guardar los datos
};
// traer los post guardados en firestore
// export const getTask = () => getDocs(collection(db, 'post'));

// onSnapshot -> para que escuche los cambios y se vea en tiempo real
export const onGetTasks = (callback) => onSnapshot(query(collection(db, 'post'), orderBy('date', 'desc')), callback);

export const deleteTask = (id) => deleteDoc(doc(db, 'post', id));

export const editTasks = (id) => getDoc(doc(db, 'post', id));

export const updateTask = (id, newDates) => updateDoc(doc(db, 'post', id), newDates);

export const addLike = (id) => {
  const currentUser = auth.currentUser;
  const docRef = doc(db, 'post', id);
  updateDoc(docRef, {
    likes: arrayUnion(currentUser.uid),
  });
};

export const removeLike = (id) => {
  const currentUser = auth.currentUser;
  const docRef = doc(db, 'post', id);
  updateDoc(docRef, {
    likes: arrayRemove(currentUser.uid),
  });
};
