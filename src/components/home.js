import { onAuthStateChanged } from 'firebase/auth';
import { loginWithGithub, loginWithGoogle, loginWithTwitter } from '../lib/loginConfig.js';
import { auth } from '../lib/firebaseConfig.js';

function home(navigateTo) {
  const homediv = document.createElement('div');
  homediv.className = 'homediv';
  const imghome = document.createElement('div');
  imghome.className = 'imghome';
  const messagehome = document.createElement('h1');
  messagehome.className = 'messagehome';
  const buttondiv = document.createElement('div');
  buttondiv.className = 'buttondiv';
  // Botón de email
  const buttonemail = document.createElement('button');
  buttonemail.className = 'buttonemail';
  buttonemail.textContent = 'Continuar con Email';
  buttonemail.addEventListener('click', () => {
    navigateTo('/login');
  });
  const iconemail = document.createElement('div');
  iconemail.className = 'iconemail';
  // Botón de google
  const buttongoogle = document.createElement('button');
  buttongoogle.className = 'buttongoogle';
  buttongoogle.addEventListener('click', () => {
    loginWithGoogle();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigateTo('/muro');
      }
    });
  });
  const icongoogle = document.createElement('div');
  icongoogle.className = 'icongoogle';
  // Botón de twitter
  const buttontwitter = document.createElement('button');
  buttontwitter.className = 'buttontwitter';
  buttontwitter.addEventListener('click', () => {
    loginWithTwitter();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigateTo('/muro');
      }
    });
  });
  const icontwitter = document.createElement('div');
  icontwitter.className = 'icontwitter';
  // Botón de github
  const buttongithub = document.createElement('button');
  buttongithub.type = 'button';
  buttongithub.className = 'buttongithub';
  buttongithub.addEventListener('click', () => {
    loginWithGithub();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigateTo('/muro');
      }
    });
  });
  const icongithub = document.createElement('div');
  icongithub.className = 'icongithub';
  //
  const registrarAhora = document.createElement('span');
  registrarAhora.className = 'registrarAhora';

  // texto botones
  buttonemail.textContent = 'Continuar con Email';
  buttongoogle.textContent = 'Continuar con Google';
  buttontwitter.textContent = 'Continuar con Twitter';
  buttongithub.textContent = 'Continuar con Github';
  registrarAhora.innerHTML = ` ¿No tienes una cuenta?
  <strong class='efecto-after'>Regístrate ahora</strong>`;
  registrarAhora.addEventListener('click', () => {
    navigateTo('/register');
  });
  messagehome.textContent = 'Bienvenido a Food Match';

  homediv.append(imghome, messagehome, buttondiv, registrarAhora);
  buttondiv.append(buttonemail, buttongoogle, buttontwitter, buttongithub);
  buttonemail.appendChild(iconemail);
  buttongoogle.appendChild(icongoogle);
  buttontwitter.appendChild(icontwitter);
  buttongithub.append(icongithub);
  return homediv;
}

export default home;
