import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';

// TODO: Función de registro de usuario y contraseña.
// ? se borro el async
export const registerUser = (email, password) => new Promise((resolve, reject) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({ email: user.email });
    })
    .catch((error) => {
      const errorMessage = error.message;
      const errorCode = error.code;
      reject(errorMessage, errorCode);
    });
});
