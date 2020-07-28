'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOptionsFromElement = require('./getOptionsFromElement.js');

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = require('../renderers');

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = require('../exceptions/exceptions.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }

function getRenderProperties(element) {
  return {
    element: element,
    renderer: _renderers2.default.CanvasRenderer
  };
} /* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

exports.default = getRenderProperties;