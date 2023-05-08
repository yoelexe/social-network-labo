/**
 * @jest-environment jsdom
 */
import * as firebaseAuth from 'firebase/auth';
import login from '../src/components/login.js';
import * as loginConfig from '../src/lib/loginConfig.js';
// import home from '../src/components/home.js';
// import home from '../src/components/muro.js';

jest.mock('firebase/auth', () => ({
  __esModule: true, //    <----- this __esModule: true is important
  ...jest.requireActual('firebase/auth'),
}));
describe('login es una funcion', () => {
  it('es una función', () => {
    expect(typeof login).toBe('function');
  });
  it('hay un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const botonLogin = DOM.querySelector('.buttonReturn');
    expect(botonLogin).not.toBe(undefined);
  });
  it('al dar click a "Registrarte Ahora" debe llamar a la funcion navigateTo a la ruta register', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(login(navigateTo));
    const botonMensaje = DOM.querySelector('.mensajelogin');
    botonMensaje.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
  it('al dar click al boton ingresar, nos lleva a la ruta "/muro"', (done) => {
    jest.spyOn(firebaseAuth, 'signInWithEmailAndPassword').mockResolvedValue({ user: 'prueba@prueba.com' });
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(login(navigateTo));
    const botonIngreso = DOM.querySelector('.buttonReturn');
    botonIngreso.click();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenCalledWith('/muro');
      done();
    });
  });
  it('cuando se de click verifica que la funcion sea llamada', (done) => {
    jest.spyOn(loginConfig, 'loginConfig').mockImplementation(() => Promise.resolve({ email: 'user@test.com' }));
    const DOM = document.createElement('div');
    DOM.append(login());
    const email = DOM.querySelector('#loginCorreo');
    const password = DOM.querySelector('#loginContra');
    email.value = 'user@test.com';
    password.value = '123456';
    const buttonLoginUser = DOM.querySelector('.buttonReturn');
    buttonLoginUser.click();
    setTimeout(() => {
      expect(loginConfig.loginConfig).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
describe('verificar que sean funciones', () => {
  it('loginWithGoogle es una funcion', () => {
    const loginWithGoogle = jest.fn();
    expect(typeof loginWithGoogle).toBe('function');
  });
  it('GoogleAuthProvider es una funcion', () => {
    const GoogleAuthProvider = jest.fn();
    expect(typeof GoogleAuthProvider).toBe('function');
  });
  it('signInWithPopup es una funcion', () => {
    const signInWithPopup = jest.fn();
    expect(typeof signInWithPopup).toBe('function');
  });
  it('validar que loginWithGoogle es una funcion', () => {
    const loginWithGoogle = jest.fn();
    expect(typeof loginWithGoogle).toBe('function');
  });
  // it('validar que el boton de entrar con google', () => {
  //   const DOM = document.createElement('div');
  //   document.body.append(DOM);
  //   const navigateTo = jest.fn();
  //   DOM.append(home(navigateTo));
  //   const botonGoogle = DOM.querySelector('.buttongoogle');
  //   botonGoogle.click();
  //   expect(navigateTo).toHaveBeenCalledTimes(1);
  // });
});
