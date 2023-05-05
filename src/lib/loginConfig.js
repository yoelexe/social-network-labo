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
      console.log(userCredential);
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
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      console.log('sign in with google');
      // The signed-in user info.
      const user = result.user;
      resolve({ user });
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      reject(errorCode, errorMessage);
    });
});

// TODO: Función de logeo con Github
export const loginWithGithub = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const githubUser = result.user;
      console.log(githubUser);
      console.log(credential);
      console.log('sign in with Github');
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credentialError = GithubAuthProvider.credentialFromError(error);
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      console.log(credentialError);
    });
};

// TODO: Función de logueo con Twitter
export const loginWithTwitter = () => new Promise((resolve, reject) => {
  const provider = new TwitterAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(credential, user);
      console.log('Sign in with twitter');
      resolve({ user });
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
