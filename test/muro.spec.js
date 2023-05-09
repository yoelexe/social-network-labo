/**
 * @jest-environment jsdom
 */
// import * as firebaseAuth from 'firebase/app';
import muro from '../src/components/muro.js';


jest.mock('firebase/auth', () => ({
  __esModule: true, //    <----- this __esModule: true is important
  ...jest.requireActual('firebase/auth'),
}));
describe('Testeando muro.js', () => {
  it('muro -> debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });

  it('hay un boton cerrar sesión', (done) => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const salirAhora = DOM.querySelector('.icon_exit');
    setTimeout(() => {
      expect(salirAhora).not.toBe(null);
      done();
    });

  });
  it('que exista el div pop-up', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const button = DOM.querySelector('.open-popup');
    button.click();
    // const divpopUp = DOM.querySelector('.pop-up');
    expect(button).not.toBe(null);
    // expect(button).toHaveBeenCalledTimes(4);
    // expect(divpopUp).not.toBe(null);
    // expect(button).toHaveBeenCalledTimes(1);
  });
  /*
    it('hay un boton para abrir el pop-up', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const button = DOM.querySelector('.open-popup');
    button.click();
    expect(button).not.toBe(null);
    // expect(button).toHaveBeenCalledTimes(1);
  });
  */
  it('hay un botón para cerrar el pop-up', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const cerrarPost = DOM.querySelector('.cerrar-post');
    cerrarPost.click();
    expect(cerrarPost).not.toBe(undefined);
  });
  it('hay un formulario', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const formPost = DOM.querySelector('.form-post');
    formPost.click();
    expect(formPost).not.toBe(undefined);
  });
  // it('hay un botón delete', () => {
  //   const DOM = document.createElement('div');
  //   DOM.append(muro());
  //   document.body.innerHTML = DOM;
  //   // test.each(btnDelete);
  //   window.dispatchEvent(new Event('DOMContentLoaded'));
  //   const btnDelete = document.querySelector('.btn-delete');
  //   expect(btnDelete).not.toBe(undefined);
  //   console.log('-> ', btnDelete.textContent);
  // });

  it('hay un botón edit', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const btnEdit = DOM.querySelector('.btn-edit');
    expect(btnEdit).not.toBe(undefined);
  });
  it('da click en la salida llama a la funcion navigateTo', () => {
    const DOM = document.createElement('div');
    const navigateTo = jest.fn();
    document.body.append(DOM);
    DOM.append(muro(navigateTo));
    const salirAhora = DOM.querySelector('.icon_exit');
    salirAhora.click();
    setTimeout((done) => {
      expect(navigateTo).toHaveBeenCalledWith('/');
      done();
    });
  });
});
