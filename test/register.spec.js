/**
 * @jest-environment jsdom
 */
import register from '../src/components/register.js';
import home from '../src/components/home.js';
// import * as registerConfig from '../src/lib/registerConfig.js';
import login from '../src/components/login.js';


jest.mock('firebase/auth', () => ({
  __esModule: true, //    <----- this __esModule: true is important
  ...jest.requireActual('firebase/auth'),
}));

// TODO: Prueba unitaria de la función home
// ! BUSCAR MATCHERS
describe('Testeando home.js', () => {
  it('home -> debería ser una función', () => {
    expect(typeof home).toBe('function');
  });
  it('trayendo al span "Registrar Ahora"', () => {
    const DOM = document.createElement('div');
    DOM.append(home());
    const registrarAhora = DOM.querySelector('.registrarAhora');
    expect(registrarAhora).not.toBe(undefined);
  });
  it('al dar click a "Registrar Ahora", llamamos a "navigateTo"', () => {
    const DOM = document.createElement('div');
    // ? contiene el mock de una función
    // ? decimos que es una simulación (mockear) -> jest.fn();
    const navigateTo = jest.fn();
    // ? se la pasamos como callback (navigateTo)
    DOM.append(home(navigateTo));
    const registrarAhora = DOM.querySelector('.registrarAhora');
    registrarAhora.click();
    // ! mockear y si ha sido llamado la función navigateTo
    expect(navigateTo).toHaveBeenCalled();
  });
  it('al dar click a "Registrar Ahora", llamamos a "navigateTo" una vez', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    // ? se la pasamos como callback (navigateTo)
    DOM.append(home(navigateTo));
    const registrarAhora = DOM.querySelector('.registrarAhora');
    registrarAhora.click();
    expect(navigateTo).toHaveBeenCalledTimes(1);
  });
  // * snapshot -> tomarle una fotografia al html
  it('al dar click a "Registrar Ahora", nos lleva a la ruta "/register"', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    DOM.append(home(navigateTo));
    const registrarAhora = DOM.querySelector('.registrarAhora');
    registrarAhora.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
});

// TODO: Prueba unitaria de la función register
describe('Testeando register.js', () => {
  it('register -> debería ser una función', () => {
    expect(typeof register).toBe('function');
  });
  it('trayendo al botón "Guardar"', () => {
    const DOM = document.createElement('div');
    DOM.append(register());
    const buttonSave = DOM.querySelector('.buttonSaveInformation');
    expect(buttonSave).not.toBe(undefined);
  });
  // ? usando spyOn y mockeando la función registerConfig
  // it('dar click a "Guardar" y guarde los datos', (done) => {
  //   // ? el espia esta observando que sucede
  //   // ! BSUCAR mockImplementation
  //   jest.spyOn(registerConfig, 'registerUser').mockImplementation(() =>
  // Promise.resolve({ email: 'test@testing.com' }));
  //   const DOM = document.createElement('div');
  //   DOM.append(register());
  //   const email = DOM.querySelector('#emailregister');
  //   const password = DOM.querySelector('#passwordregister');
  //   email.value = 'test@testing.com';
  //   password.value = '123456';
  //   const buttonSave = DOM.querySelector('.buttonSaveInformation');
  //   buttonSave.click();
  //   expect(registerConfig.registerUser).
  // toHaveBeenLastCalledWith('test@testing.com', '123456');
  //   setTimeout(() => {
  //     expect(registerConfig.registerUser).toHaveBeenCalledTimes(1);
  //     done();
  //   });
  // });
});
describe('Testeando botones de navegacion', () => {
  it('boton "Continuar con email" llame a la funcion navigateTo a la ruta /login', () => {
    const DOM = document.createElement('div');

    const navigateTo = jest.fn();
    DOM.append(home(navigateTo));
    const registrarAhora = DOM.querySelector('.buttonemail');
    registrarAhora.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
});

describe('Testeando login.js', () => {
  it('es una función', () => {
    expect(typeof login).toBe('function');
  });
  it('hay un boton', () => {
    const DOM = document.createElement('div');
    DOM.append(login());
    const botonLogin = DOM.querySelector('.buttonReturn');
    expect(botonLogin).not.toBe(undefined);
  });
  it('al dar click a "Registrarte Ahora" debe llamar a la funcionnavigateTo a la ruta register', () => {
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
});
