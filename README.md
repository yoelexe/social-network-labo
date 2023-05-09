# Creando una Red Social

## Índice

- [Creando una Red Social](#creando-una-red-social)
  - [Índice](#índice)
  - [1. Food Match](#1-food-match)
  - [2. Prototipos](#2-prototipos)
  - [5. Historias de Usuario](#5-historias-de-usuario)
    - [Historia de Usuario 1.](#historia-de-usuario-1)
    - [Historia de Usuario 2.](#historia-de-usuario-2)
    - [Historia de Usuario 3.](#historia-de-usuario-3)
    - [Histora de Usuario 4.](#histora-de-usuario-4)
    - [Historia de Usuario 5.](#historia-de-usuario-5)
  - [6. Colaboradores](#6-colaboradores)
  - [7. Deploy](#7-deploy)
  - [8. Test de usabilidad](#8-test-de-usabilidad)


## 1. Food Match

Bienvenidos a Food Match, una red donde los amantes de la cocina podrán compartir sus recetas. En esta página deberán iniciar sesión y si no tienen una cuenta podrán crear una o ingresar con sus cuentas de Google, Twitter o Github. Dentro del sitio web los usuarios podrán compartir sus recetas favoritas con otros usuarios, además de eliminarlas o editarlas y podrán interactuar dando like a las publicaciones.

La idea del proyecto, surge a partir de una encuesta realizada a una muestra de 10 personas, dando como resultado, que el 90% de las personas encuestadas evalúan que lo más difícil es considerar que cocinar, pensando en ellos, Food Macth genera un espacio donde por medio de las diferentes publicaciones que comparten los usuarios, les muestra una variedad de opciones el cual podrán escoger según su preferencia. 

## 2. Prototipos

* ### Prototipo baja fidelidad
Se realizó el prototipo de baja fidelidad pensando en las necesidades del usuario descritas en las historias de usuario.
![FoodMatch.prototipo_baja_fidelidad-mobile](/src/assets/imgReadme/foodmatch.prototipo_baja_fidelidad-mobile_720.png)

 <details><summary>Link</summary><p>

  * [Miro](https://miro.com/app/board/uXjVMWUhOO0=/)
  
  </p></details>

* ### Prototipo alta fidelidad

El prototipo de alta fidelidad se realizo en version móvil y otro para escritorio, se definio la paleta de colores que se utilizarian y el diseño.
![FoodMatch.prototipo_baja_fidelidad-mobile](/src/assets/imgReadme/foodmatch.prototipo_alta_fidelidad-mobile_720.png)

 <details><summary>Link</summary><p>

  * [Figma](https://www.figma.com/file/LyZVwoa1dyzBdfxvx4QS2o/Laboratoria-team-library?type=design&node-id=1111-2&t=VIkSmFIe5FeSSnQr-0)
</p></details>

## 5. Historias de Usuario

Para iniciar con el desarrollo de la página web, se realizó una encuesta a un grupo de posibles usuarios con la finalidad de conocer sus preferencias o expectativas. Para ello se les pidió que completaran el siguiente [formulario](https://docs.google.com/forms/d/11WD-pyQ8Pbt1IWbCLrPGsr8i3mJLl3ZJSg9AfV1HJe8/edit#responses). A partir de ella y teniendo en cuenta los principales requerimientos del proyecto, creamos las siguientes historias de usuario. 

Características que se cubren en todas las historias de usuario:

* **Criterios de Aceptación.**
  - [ 🗸 ] *Que la vista sea responsive*
  - [ 🗸 ] *Que los diseños sigan las pautas del prototipado de alta fielidad*

### Historia de Usuario 1.

Yo como usuario de Food Match quiero poder loguearme en la red social para poder ingresar a la plataforma.

### Historia de Usuario 2.

HU02: Yo como usuario de Food Match quiero poder registrarme en la red social para interactuar con otros usuarios

* **Criterios de Aceptación.**
  - [ 🗸 ] *Que el correo ingresado por el usuario sea válido*
  - [ 🗸 ] *Que la contraseña posea como mínimo 6 caracteres*
  - [ 🗸 ] *Que este conectado a Firebase*

### Historia de Usuario 3.

Yo como usuario de Food Match quiero poder ingresar a la página con el correo, con google, twitter y Github

* **Criterios de Aceptación.**
  - [ 🗸 ] *Que los íconos de gmail, twitter y github sigan el diseño de marca de cada uno*
  - [ 🗸 ] *Que estén conectados a Firebase y permitan el ingreso con las cuentas*
  - [ 🗸 ] *Que permita la entrada con un nuevo correo*

### Histora de Usuario 4. 

Yo como usuario de Food Match quiero poder hacer publicaciones, que se vean en pantalla, tengan la opcion de editar y eliminar, todo en el muro de la red social para que mas usuarios del aplicativo lo vean.

* **Criterios de Aceptación.**
  - [ 🗸 ] *Que la publicación se quede guardada en la base de datos*

### Historia de Usuario 5.

Yo como usario de Food Match quiero darle like a las publicaciones.
* **Criterios de Aceptación.**
  - [ 🗸 ] *Que esté conectado con Firebase*
  - [ 🗸 ] *Que se guarde el conteo de los like y se visualicen*

## 6. Colaboradores

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Deploy

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting
(Firebase, Netlify, Vercel, etc) que puedas haber encontrado en el camino.
Revisa la [documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
para guiarte con eso.

***

## 8. Test de usabilidad

Se realizaron test de usabilidad para saber la opinión de los usuarios sobre la página, obteniendo los siguientes resultados: 
  
* **Usuario 1**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ 🗸 ] Que la palabra "Registrar ahora" resalte cuando el puntero pase sobre ella
  - [ 🗸 ] Que el botón Guardar e Ingresar, así como los espacios para colocar el Correo Electrónico y la Contraseña generen alguna reacción cuando el puntero pase sobre ellos
  - [ 🗸 ] Solicitó que en los post aparezcan los nombres o alias de los usuarios en vez de los correos, debido a que pueden ser información sensible
  - [ 🗸 ] Que los post incluyan la hora de su publicación y el lugar
  
* **Usuario 2**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ 🗸 ] Cuando le de guardar en el cuadro de publicar seria bueno que el cuadro se cerrara
  - [ 🗸] En el momento de eliminar un test, deberia de aparecer un mensaje para asegurarse de querer borrar la publicacion
  - [ 🗸 ] Cuando estaba editando y le di al boton guardar, como el cuadro seguia mostrandose pense que no habia guardado, seria bueno que cuando se de click se cierre ese cuadro.

* **Usuario 3**
  Después de que el usuario revisara la aplicación, sugirió los siguiente cambios:
   - [ 🗸 ] Cuando se va a publicar por segunda vez, la informacion de la primera publicacion sigue en el cuadro
   - [ 🗸 ] Cuando se va a editar una publicacion y luego se guarda el cuadro sigue puesto y no se cierra
  
* **Usuario 4**
  Después de que usuario revisara la aplicación, sugirió los siguiente cambios:
  - [ 🗸 ] Corregir alineación de los iconos del logueo de las redes sociales
  - [ 🗸 ] Que los mensajes de error se muestren debajo de los casillas donde se ingresa el correo y la contraseña
  - [ 🗸 ] Agregar un botón de retorno a la página de login y registro hacia la página de bienvenida

🧵 Realizado por:

1.  Angie Mora 

    🧰 [LinkedIn](https://www.linkedin.com/in/angie-mora-619733215/)

    👾 [Github](https://github.com/AngieMora1)

2.  Karen Huamán
   
    🧰 [LinkedIn](https://www.linkedin.com/in/martihuaman/)

    👾 [Github](https://github.com/yoelexe/)

3.  Jackeline García
   
    🧰 [LinkedIn](https://www.linkedin.com/in/jackeline-garcia-ramh/)

    👾 [Github](https://github.com/JackelineGS)
  
  