import { signOut } from 'firebase/auth';
import {
  saveTask,
  onGetTasks,
  deleteTask,
  editTasks,
  updateTask,
  addLike,
  auth,
  removeLike,
} from '../lib/firebaseConfig.js';

let editStatus = false;
let id = '';

function muro(navigateTo) {
  const muroDiv = document.createElement('div');
  muroDiv.className = 'muroDiv';

  muroDiv.innerHTML = '';
  muroDiv.innerHTML += `
  <header>
  <a class='logo'><i class='bx bx-leaf'></i><span>Food Match</span></a>
  <button class='icon_exit' type='button'><i class='bx bx-exit' ></i></button>
  </header>
  <main>
  
  <div class='create-post'> 
  <button class='open-popup'>¿Qué receta quieres compartir hoy?</button>
  </div>

  <div class='pop-up' id='pop-up'>
  <div class='wrapper'>
  <section class='post'>
  <button class='cerrar-post'><i class='bx bx-x'></i></button>

  <form action='#' class='form-post' id='form-post'>
  <h2>Crear Post</h2>
  <div class='content-post'>
  <div class='detail-post'>
  <p>Food Match</p>
  <div class='privacy'>
  <i class='bx bx-user-pin' ></i>
  <span>amigos</span>
  <i class='bx bx-caret-down'></i>
  </div>
  </div>
  </div>
  <textarea id='textarea-post' placeholder='Descripción del post :D'> </textarea>
  <button class='publicar-post' type='submit' >Guardar</button>
  </form>

  </section>
  </div>
  </div>

  <div id='tasks-container' class='tasks-container'></div>
  </main>
  `;

  // botón salida
  const iconExit = muroDiv.querySelector('.icon_exit');
  iconExit.addEventListener('click', () => {
    signOut(auth)
      .then(() => {
        navigateTo('/');
      });
  });

  const interacionPopUp = () => {
    const openPopup = muroDiv.querySelector('.open-popup');
    openPopup.addEventListener('click', () => {
      const popUp = muroDiv.querySelector('.pop-up');
      // const button = muroDiv.querySelector('.open-popup');
      const cerrarPost = muroDiv.querySelector('.cerrar-post');
      openPopup.addEventListener('click', () => {
        popUp.style.display = 'block';
      });
      cerrarPost.addEventListener('click', () => {
        popUp.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
        if (e.target === popUp) {
          popUp.style.display = 'none';
        }
      });
    });
  };

  interacionPopUp();

  // contenedor publicaciones (mostrar datos)
  const tasksContainer = muroDiv.querySelector('.tasks-container');
  // consulta asíncrona
  // querySnapshot -> los datos que existen en este momento
  // ejecutar con promesa o callback

  // cuando ocurra un cambio en la base de datos de post
  // voy a recibir los datos nuevos voy a crear el html  y recorrer los datos
  // para verlo y luego pintamos el html y luego lo ponemos dentro del task container
  onGetTasks((querySnapshot) => {
    let html = '';
    // por cada documento quiero ver por consola el documento
    querySnapshot.forEach((doc) => {
      const task = doc.data();
      html += `
        <div class='publicaciones'>
        
        <div class='dropdown'>
        <button class='btn-menu'><i class='bx bx-dots-horizontal-rounded'></i></button>
        <h3>${task.username.split('@')[0]}</h3>

        <div class='container-options'>
        <button class='btn-delete' data-id='${doc.id}'>Eliminar</button>
        <button class='btn-edit' data-id='${doc.id}'>Editar</button>
        </div>

        </div>

        <div class='body-description'>
        <p class='dateFormat'>${task.date}</p>
        <p>${task.description}</p>
        </div>

        <div class='reactions'>
        <button class='btn-like' data-id='${doc.id}' data-liked='${task.likes.includes(auth.currentUser.uid)}'>
        </button> 
        <span class='count-like'> ${task.likes.length}</span>
        </div>

        </div>
          `;
    });

    // en el parametro event se puede resumir debido a q todos
    // los elementos son objetos, esto es de la siguiente manera:
    // ({target: {dataset}})
    tasksContainer.innerHTML = html;

    const btnDelete = tasksContainer.querySelectorAll('.btn-delete');
    btnDelete.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deleteTask(event.target.dataset.id);
      });
    });

    const btnEdit = tasksContainer.querySelectorAll('.btn-edit');
    btnEdit.forEach((btn) => {
      btn.addEventListener('click', async (event) => {
        const cerrarPost = muroDiv.querySelector('.cerrar-post');
        const popUp = muroDiv.querySelector('.pop-up');
        popUp.style.display = 'block';
        cerrarPost.addEventListener('click', () => {
          popUp.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
          // windoow??
          if (e.target === popUp) {
            popUp.style.display = 'none';
          }
        });
        const docEdit = await editTasks(event.target.dataset.id);
        // console.log(docEdit);
        const taskEdit = docEdit.data();
        const formPost = muroDiv.querySelector('.form-post');
        formPost['textarea-post'].value = taskEdit.description;
        editStatus = true;
        id = event.target.dataset.id;
      });
    });

    const btnLike = tasksContainer.querySelectorAll('.btn-like');

    btnLike.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        if (event.target.dataset.liked === 'false') {
          addLike(event.target.dataset.id);
        } else {
          removeLike(event.target.dataset.id);
        }
      });
    });
  });

  const formPost = muroDiv.querySelector('.form-post');
  // const publicarPost = muroDiv.querySelector('.publicar-post');
  // const popUp = muroDiv.querySelector('.pop-up');
  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = formPost['textarea-post'].value;
    // console.log(description);
    if (!editStatus) {
      saveTask(description);
    } else {
      updateTask(id, { description });
      editStatus = false;
    }
  });
  return muroDiv;
}

export default muro;
