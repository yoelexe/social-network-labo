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
      <input type='email' class='emailRegister' id='emailregister' placeholder='Iniciar sesión' required> 
      <p class='correo-mensaje'></p>
        <input type='password' class='passwordRegister' id='passwordregister' placeholder='Contraseña' required>
        <p class='contra-mensaje'></p>
            <button class='buttonSaveInformation' type='submit'>Guardar</button>
    </form>
  </div>`;

  const btnRegresar = formularioRegister.querySelector('.btn-regresar');
  btnRegresar.addEventListener('click', () => {
    navigateTo('/login');
  });

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  // quite el ('click', async (e)
  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    /* const email = document.getElementsByClassName('emailregister').value;
    const password = document.getElementsByClassName('passwordregister').value; */
    const email = formularioRegister.querySelector('#emailregister').value;
    const password = formularioRegister.querySelector('#passwordregister').value;
    // const emailRegister = formularioRegister.querySelector('.emailRegister');
    // const passwordregister = formularioRegister.querySelector('.passwordregister');
    const correoMensaje = formularioRegister.querySelector('.correo-mensaje');
    const contraMensaje = formularioRegister.querySelector('.contra-mensaje');
    registerUser(email, password)
      .then(() => {
        // console.log(email, password);
        navigateTo('/login');
      })
      .catch((error) => {
        //! CAMBIAR LOS IF A LA FUNCION
        if (email === '' || password === '') {
          correoMensaje.textContent = 'Ingresar correo';
          correoMensaje.style.color = 'red';
          contraMensaje.textContent = 'Ingresar contraseña';
          contraMensaje.style.color = 'red';
        } else if (error.code === 'auth/email-already-in-user') {
          correoMensaje.textContent = 'Correo en uso';
        } else if (error.code === 'auth/invalid-email') {
          correoMensaje.textContent = 'Correo inválido';
        } else if (error.code === 'auth/weak-password') {
          contraMensaje.textContent = 'Contraseña muy corta';
        }
        return error;
      });
  });
  return formularioRegister;
};

export default register;
