import { registerUser } from '../lib/registerConfig.js';

const register = (navigateTo) => {
  const formularioRegister = document.createElement('div');
  formularioRegister.className = 'formularioRegister';

  formularioRegister.innerHTML = '';
  formularioRegister.innerHTML += `
  <div class='registerDiv'> 
   <div class='imgRegister'> 
    <h2 class='menssageRegisterRouter'>Regístrate</h2>
   </div>
    <form class='infoRegister' id='formulario'>
      <input type='email' class='emailRegister' id='emailregister' placeholder='Iniciar sesión' required> 
        <input type='password' class='passwordRegister' id='passwordregister' placeholder='Contraseña' required>
          <input type='password' class='checkPasswordRegister' id= 'checkPasswordRegister' placeholder='Repetir contraseña' required>
            <button class='buttonSaveInformation' type='submit'>Guardar</button>
    </form>
  </div>`;

  // TODO: botón para registrar
  const buttonSaveInformation = formularioRegister.querySelector('.buttonSaveInformation');
  // quite el ('click', async (e)
  buttonSaveInformation.addEventListener('click', async (e) => {
    e.preventDefault();
    /* const email = document.getElementsByClassName('emailregister').value;
    const password = document.getElementsByClassName('passwordregister').value; */
    const email = formularioRegister.querySelector('#emailregister').value;
    const password = formularioRegister.querySelector('#passwordregister').value;
    registerUser(email, password)
      .then(() => {
        console.log(email, password);
        navigateTo('/login');
      })
      .catch((error) => {
        //! CAMBIAR LOS IF A LA FUNCION
        if (error.code === 'auth/email-already-in-user') {
          console.error('correo en uso');
        } else if (error.code === 'auth/invalid-email') {
          console.error('correo inválido');
        } else if (error.code === 'auth/weak-password') {
          console.error('contraseña muy corta');
        } else {
          console.error('otro problema', error.code, error.message);
        }
        return error;
      });
  });
  return formularioRegister;
};

export default register;
