import { registerUser } from '../lib/registerConfig.js';

const register = (navigateTo) => {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  formularioRegister.innerHTML = '';
  formularioRegister.innerHTML += `
  <div class='registerDiv'> 
  <button class='btn-regresar'><i class='bx bx-chevron-left'></i></button>
   <div class='imgRegister'> 
    <h2 class='menssageRegisterRouter'>Regístrate</h2>
   </div>
    <form class='infoRegister' id='formulario'>
      <input type='email' class='emailRegister' id='emailregister' placeholder='Correo Electrónico' required> 
      <p class='correo-mensaje'></p>
        <input type='password' class='passwordRegister' id='passwordregister' placeholder='Contraseña' required>
        <p class='contra-mensaje'></p>
            <button class='buttonSaveInformation' type='submit'>Guardar</button>
    </form>
  </div>`;

  const btnRegresar = formularioRegister.querySelector('.btn-regresar');
  btnRegresar.addEventListener('click', () => {
    navigateTo('/');
  });

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  // quite el ('click', async (e)
  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = formularioRegister.querySelector('#emailregister').value;
    const password = formularioRegister.querySelector('#passwordregister').value;
    const correoMensaje = formularioRegister.querySelector('.correo-mensaje');
    const contraMensaje = formularioRegister.querySelector('.contra-mensaje');
    registerUser(email, password)
      .then(() => {
        // console.log(email, password);
        navigateTo('/login');
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
        return error;
      });
  });
  return formularioRegister;
};

export default register;
