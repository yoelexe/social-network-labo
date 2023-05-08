/**
 * @jest-environment jsdom
 */
// import * as firebaseAuth from 'firebase/app';
import muro from '../src/components/muro.js';

describe('Testeando muro.js', () => {
  it('muro -> debería ser una función', () => {
    expect(typeof muro).toBe('function');
  });
  it('hay un boton cerrar sesión', () => {
    const DOM = document.createElement('div');
    DOM.append(muro());
    const salirAhora = DOM.querySelector('.icon_exit');
    expect(salirAhora).not.toBe(undefined);
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
