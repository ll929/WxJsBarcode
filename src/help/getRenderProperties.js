/* global HTMLImageElement */
/* global HTMLCanvasElement */
/* global SVGElement */

import getOptionsFromElement from './getOptionsFromElement.js'
import renderers from '../renderers'

import { InvalidElementException } from '../exceptions/exceptions.js'

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

function getRenderProperties (element) {
  return {
    element: element,
    renderer: renderers.CanvasRenderer
  }
}

export default getRenderProperties
