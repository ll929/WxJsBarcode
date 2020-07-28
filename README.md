<p align="center">
	<a href="http://lindell.me/JsBarcode"><img src="http://lindell.me/JsBarcode/other/logo.svg" alt="JsBarcode"/></a>
	<br><br>
	<a href="http://travis-ci.org/lindell/JsBarcode"><img src="https://secure.travis-ci.org/lindell/JsBarcode.svg" alt="Build Status"/></a>
	<a href="https://scrutinizer-ci.com/g/lindell/JsBarcode/?branch=master"><img src="https://scrutinizer-ci.com/g/lindell/JsBarcode/badges/quality-score.png?b=master" alt="Scrutinizer Code Quality"/></a>
	<a href="https://www.jsdelivr.com/package/npm/jsbarcode"><img src="https://data.jsdelivr.com/v1/package/npm/jsbarcode/badge?style=rounded" alt="CDN"></a>
	<a href="https://github.com/lindell/JsBarcode/blob/master/MIT-LICENSE.txt"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"/></a>
</p>

Introduction
----
**JsBarcode** is a **barcode generator** written in JavaScript. It supports multiple barcode formats and works in browsers and with *Node.js*. It has *no dependencies* when it is used for the web but works with *jQuery* if you are into that.



Demo
----
#### [Barcode Generator](http://lindell.github.io/JsBarcode/generator/)
#### [Simple CodePen Demo](http://codepen.io/lindell/pen/eZKBdO?editors=1010)
#### [Settings CodePen Demo](http://codepen.io/lindell/pen/mPvLXx?editors=1010)

Supported barcodes:
----
* [CODE128](https://github.com/lindell/JsBarcode/wiki/CODE128)
  * CODE128 (automatic mode switching)
  * CODE128 A/B/C (force mode)
* [EAN](https://github.com/lindell/JsBarcode/wiki/EAN)
  * EAN-13
  * EAN-8
  * EAN-5
  * EAN-2
  * UPC (A)
  * UPC (E)
* [CODE39](https://github.com/lindell/JsBarcode/wiki/CODE39)
* [ITF](https://github.com/lindell/JsBarcode/wiki/ITF-14)
  * ITF
  * ITF-14
* [MSI](https://github.com/lindell/JsBarcode/wiki/MSI)
  * MSI10
  * MSI11
  * MSI1010
  * MSI1110
* [Pharmacode](https://github.com/lindell/JsBarcode/wiki/pharmacode)
* [Codabar](https://github.com/lindell/JsBarcode/wiki/codabar)

Examples for browsers:
----

#### First create a canvas (or image)
````html
<canvas type="2d" id="barcode"></canvas>
````



#### Simple example:
````javascript
wx.createSelectorQuery()
        .in(this)
        .select('#barcode')
        .fields({
          node: true,
          size: true
        }).exec((res) => {
          const canvas = res[0].node
          jsbarcode(res[0].node,"Hi!")
        })
````

##### Result:
![Result](https://s3-eu-west-1.amazonaws.com/js-barcode/barcodes/simple.svg)


#### Example with options:
````javascript
wx.createSelectorQuery()
        .in(this)
        .select('#barcode')
        .fields({
          node: true,
          size: true
        }).exec((res) => {
          const canvas = res[0].node
          jsbarcode(res[0].node,"1234",{
            format: "pharmacode",
            lineColor: "#0aa",
            width:4,
            height:40,
            displayValue: false
          })
        })
````
##### Result:
![Result](https://s3-eu-west-1.amazonaws.com/js-barcode/barcodes/advanced.svg)


Bower and npm:
----
You can also use [Bower](http://bower.io) or [npm](https://www.npmjs.com) to install and manage the library.
````bash
bower install wxjsbarcode --save
````
````bash
npm install wxjsbarcode --save
````

Options:
----
For information about how to use the options, see [the wiki page](https://github.com/lindell/JsBarcode/wiki/Options).

| Option | Default value | Type |
|--------|---------------|------|
| [`format`](https://github.com/lindell/JsBarcode/wiki/Options#format) | `"auto" (CODE128)` | `String` |
| [`width`](https://github.com/lindell/JsBarcode/wiki/Options#width) | `2` | `Number` |
| [`height`](https://github.com/lindell/JsBarcode/wiki/Options#height) | `100` | `Number` |
| [`displayValue`](https://github.com/lindell/JsBarcode/wiki/Options#display-value) | `true` | `Boolean` |
| [`text`](https://github.com/lindell/JsBarcode/wiki/Options#text) | `undefined` | `String` |
| [`fontOptions`](https://github.com/lindell/JsBarcode/wiki/Options#font-options) | `""` | `String` |
| [`font`](https://github.com/lindell/JsBarcode/wiki/Options#font) | `"monospace"` | `String` |
| [`textAlign`](https://github.com/lindell/JsBarcode/wiki/Options#text-align) | `"center"` | `String` |
| [`textPosition`](https://github.com/lindell/JsBarcode/wiki/Options#text-position) | `"bottom"` | `String` |
| [`textMargin`](https://github.com/lindell/JsBarcode/wiki/Options#text-margin) | `2` | `Number` |
| [`fontSize`](https://github.com/lindell/JsBarcode/wiki/Options#font-size) | `20` | `Number` |
| [`background`](https://github.com/lindell/JsBarcode/wiki/Options#background)  | `"#ffffff"` | `String (CSS color)` |
| [`lineColor`](https://github.com/lindell/JsBarcode/wiki/Options#line-color) | `"#000000"` | `String (CSS color)` |
| [`margin`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `10` | `Number` |
| [`marginTop`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginBottom`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginLeft`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`marginRight`](https://github.com/lindell/JsBarcode/wiki/Options#margins) | `undefined` | `Number` |
| [`valid`](https://github.com/lindell/JsBarcode/wiki/Options#valid) | `function(valid){}` | `Function` |

Contributions and feedback:
----
We :heart: contributions and feedback.

If you want to contribute, please check out the [CONTRIBUTING.md](https://github.com/lindell/JsBarcode/blob/master/CONTRIBUTING.md) file.

If you have any question or suggestion [create an issue](https://github.com/lindell/JsBarcode/issues/new) or ask about it in the [gitter chat](https://gitter.im/lindell/JsBarcode).

Bug reports should always be done with a [new issue](https://github.com/lindell/JsBarcode/issues/new).

License:
----
JsBarcode is shared under the [MIT license](https://github.com/lindell/JsBarcode/blob/master/MIT-LICENSE.txt). This means you can modify and use it however you want, even for comercial use. But please give this the Github repo a :star: and write a small comment of how you are using JsBarcode in the [gitter chat](https://gitter.im/lindell/JsBarcode).



[1]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/JsBarcode.all.min.js "jsdelivr all barcodes"
[2]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.code128.min.js "jsdelivr code128"
[3]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.code39.min.js "jsdelivr code39"
[4]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.ean-upc.min.js "jsdelivr ean/upc"
[5]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.itf.min.js "jsdelivr itf"
[6]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.msi.min.js "jsdelivr msi"
[7]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.pharmacode.min.js "jsdelivr pharmacode"
[8]: https://cdn.jsdelivr.net/npm/jsbarcode@3.11.0/dist/barcodes/JsBarcode.codabar.min.js "jsdelivr codabar"
