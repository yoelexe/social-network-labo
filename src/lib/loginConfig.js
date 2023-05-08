// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig.js';

// TODO: Función del logueo previamente registrado
export const loginConfig = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({ email: user.email, password: user.password });
    })
    .catch((error) => {
      // const errorMessage = error.message;
      const errorCode = error.code;
      reject(errorCode);
    });
});

// TODO: Función loginwithGoogle para poder ingresar a la plataforma con correo de Google
export const loginWithGoogle = () => new Promise((resolve, reject) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      resolve(user, credential);
    })
    .catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});

// TODO: Función de logeo con Github
export const loginWithGithub = () => new Promise((resolve, reject) => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const githubUser = result.user;
      resolve({ credential, githubUser });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      reject(errorCode, errorMessage);
    });
});

// TODO: Función de logueo con Twitter
export const loginWithTwitter = () => new Promise((resolve, reject) => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const user = result.user;
      resolve({ user, credential });
    })
    .catch((error) => {
      console.log('error lors de lauthentification firebase : ', error);
      console.log('codeError : ', error.code);
      // error.email is undefined
      console.log('emailError : ', error.email);
      console.log('errorMessage : ', error.message);
      const codeError = error.code;
      console.log(codeError);
      reject(error.code);
    });
});

// TODO: Cerrar sesión
/*
export const signOutSession = () => {
  signOut(auth).then(() => {
    alert('Cerrando sesión');
  }).catch((error) => {
    const errores = error.code;
    alert(errores);
  });
};
*/
