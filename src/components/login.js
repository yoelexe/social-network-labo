import { loginConfig } from '../lib/loginConfig.js';

const login = (navigateTo) => {
  const formularioLogin = document.createElement('div');
  formularioLogin.className = 'formularioLogin';

  formularioLogin.innerHTML = '';
  formularioLogin.innerHTML += `
  <div class="loginDiv">
  <button class='btn-regresar'><i class='bx bx-chevron-left'></i></button> 
  <div class="imgLogin"> 
   <h2 class="messageLogin">Iniciar Sesión</h2>
   </div>
   <form class="credencialesdiv" id="formulario">
    <input type="email" class="loginCorreo" id="loginCorreo" placeholder="Correo Electrónico" required>
    <p class='correo-mensaje'></p>
     <input type="password" class="loginContra" id="loginContra" placeholder="Contraseña" required>
     <p class='contra-mensaje'></p>
      <button class="buttonReturn" type="submit">Ingresar</button> 
   </form>
   <span class="mensajelogin"> ¿No tienes una cuenta?
   <strong class="efecto-after">Regístrate ahora</strong></span>
  </div>`;
  const mensajelogin = formularioLogin.querySelector('.mensajelogin');
  mensajelogin.addEventListener('click', () => {
    navigateTo('/register');
  });
  const btnRegresar = formularioLogin.querySelector('.btn-regresar');
  btnRegresar.addEventListener('click', () => {
    navigateTo('/');
  });

  const buttonReturn = formularioLogin.querySelector('.buttonReturn');
  buttonReturn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginCorreo').value;
    const password = document.getElementById('loginContra').value;
    const loginCorreo = formularioLogin.querySelector('.loginCorreo');
    const loginContra = formularioLogin.querySelector('.loginContra');
    const correoMensaje = formularioLogin.querySelector('.correo-mensaje');
    const contraMensaje = formularioLogin.querySelector('.contra-mensaje');
    loginConfig(email, password)
      .then(() => {
        // console.log(email, password);
        navigateTo('/muro');
      })
      .catch(() => {
        if (loginCorreo.value === '' || loginContra.value === '') {
          correoMensaje.textContent = 'Ingresar correo';
          correoMensaje.style.color = 'red';
          contraMensaje.textContent = 'Ingresar contraseña';
          contraMensaje.style.color = 'red';
          loginCorreo.focus();
        }
      });
  });
  return formularioLogin;
};
export default login;
