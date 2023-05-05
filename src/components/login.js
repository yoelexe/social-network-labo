import { loginConfig } from '../lib/loginConfig.js';

const login = (navigateTo) => {
  const formularioLogin = document.createElement('div');
  formularioLogin.className = 'formularioLogin';

  formularioLogin.innerHTML = '';
  formularioLogin.innerHTML += `
  <div class="loginDiv"> 
  <div class="imgLogin"> 
   <h2 class="messageLogin">Iniciar Sesión</h2>
   </div>
   <form class="credencialesdiv" id="formulario">
    <input type="email" class="loginCorreo" id="loginCorreo" placeholder="Correo Electrónico" required>
     <input type="password" class="loginContra" id="loginContra" placeholder="Contraseña" required>
      <button class="buttonReturn" type="submit">Ingresar</button> 
   </form>
   <span class="mensajelogin"> ¿No tienes una cuenta?
   <strong>Regístrate ahora</strong></span>
  </div>`;
  const mensajelogin = formularioLogin.querySelector('.mensajelogin');
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });
  const buttonReturn = formularioLogin.querySelector('.buttonReturn');
  buttonReturn.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginContra').value;
    loginConfig(email, password)
      .then(() => {
        console.log(email, password);
        navigateTo('/muro');
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alert('no esta registrado');
        }

        if (error.code === 'auth/wrong-password') {
          alert('contraseña incorrecta');
        }
        return error;
      });
  });
  formularioLogin.appendChild(mensajelogin);
  return formularioLogin;
};
export default login;
