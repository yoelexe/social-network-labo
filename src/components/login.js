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
    const correoMensaje = formularioLogin.querySelector('.correo-mensaje');
    const contraMensaje = formularioLogin.querySelector('.contra-mensaje');
    loginConfig(email, password)
      .then(() => {
        // console.log(email, password);
        navigateTo('/muro');
      })
      .catch((error) => {
        //! CAMBIAR LOS IF A LA FUNCION

        const expresiones = {
          contra: /^.{6,}$/, // 6 a 12 digitos.
          correo: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
        };

        if (email === '') {
          correoMensaje.textContent = 'Ingresar correo';
          correoMensaje.style.color = 'red';
          if (password === '') {
            contraMensaje.textContent = 'Ingresar contraseña';
            contraMensaje.style.color = 'red';
          }
        } else {
          if (expresiones.correo.test(email)) {
            correoMensaje.textContent = '';
          } else {
            correoMensaje.textContent = 'Correo inválido';
            correoMensaje.style.color = 'red';
          }
          if (expresiones.contra.test(password)) {
            contraMensaje.textContent = '';
          } else {
            contraMensaje.textContent = 'Contraseña de 6 digitos';
            contraMensaje.style.color = 'red';
          }
        }
        return error.code;
      });
  });
  return formularioLogin;
};
export default login;
