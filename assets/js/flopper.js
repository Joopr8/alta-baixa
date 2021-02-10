/**
 * @function flooper
 *
 * @param {String|HTMLElement} flooperElement - flooper container, defaults to '.js-flooper'
 * @param {Object} [options] - containing the props described here at #options-and-defaults
 */

let myFlooper1 = new flooper('.js-flooper', {
    autoPlay: true, //
    flooperItemSelector: '.js-flooper-item', // string class selector
    bufferSize: 0,
    name: `first`,
    speed: 2,
    onFloop: () => {}, //noop
    onStart: () => {}, //noop
    onPlay: () => {}, //noop
    onPause: () => {}, //noop
    onSlowmotion: () => {}, //noop
  });
  myFlooper.init();