// Acceso de usuarios existentes
// https://firebase.google.com/docs/auth/web/start?hl=es-419#web-version-9_1
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

// TODO: Función del logueo previamente registrado
export const loginConfig = (email, password) => new Promise((resolve, reject) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      resolve({ email: user.email, password: user.password });
    })
    .catch((error) => {
      reject(error.code);
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
      resolve(githubUser, credential);
    }).catch((error) => {
      const errorCode = error.code;
      reject(errorCode);
    });
});
// TODO: Función de logeo con Twitter

export const loginWithTwitter = () => new Promise((resolve, reject) => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const user = result.user;
      resolve({ user, credential });
    })
    .catch((error) => {
      const codeError = error.code;
      if (codeError === 'auth/account-exists-with-different-credential') {
        console.log(codeError);
      }
      reject(error.code);
    });
});
