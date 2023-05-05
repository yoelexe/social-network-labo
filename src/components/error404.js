const error = (navigateTo) => {
  const diverror = document.createElement('div');
  diverror.className = 'diverror';
  const imgerror = document.createElement('div');
  imgerror.className = 'imgerror';
  const btnerror = document.createElement('button');
  btnerror.className = 'btnerror';
  const infoerror = document.createElement('div');
  infoerror.className = 'infoerror';

  const messageerror = document.createElement('h2');
  messageerror.className = 'messageerror';

  const othermessage = document.createElement('p');
  othermessage.className = 'othermessage';

  messageerror.textContent = 'Error 404';
  othermessage.textContent = 'Página no encontrada';
  btnerror.textContent = 'Ir a home';
  btnerror.addEventListener('click', () => {
    navigateTo('/');
  });

  diverror.append(imgerror, infoerror);
  infoerror.append(messageerror, othermessage, btnerror);
  return diverror;
};

export default error;
