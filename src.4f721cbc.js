parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jExt":[function(require,module,exports) {

},{}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"FOZT":[function(require,module,exports) {
"use strict";function n(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'\n  <div class="row" style="'.concat(o,'">\n      ').concat(n,"\n  </div>\n  ")}function o(n){return'\n  <div class="col-sm">\n      '.concat(n,"\n  </div>\n  ")}function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof n)return n;return Object.keys(n).map(function(o){return"".concat(o,": ").concat(n[o])}).join(";")}function r(n){var o='\n        <form name="'.concat(n,'" data-class="').concat(c(n),'">\n            <h5>').concat(n,'</h5>\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="value" placeholder="value">\n            </div>\n            ');return"img"===n&&(o+='\n            <div class="form-group">\n                <input class="form-control form-control-sm" name="imageStyles" placeholder="imageStyles">\n            </div>'),o+='\n        <div class="form-group">\n            <input class="form-control form-control-sm" name="styles" placeholder="styles">\n        </div>\n        <button type="submit" class="btn btn-primary btn-sm">Add</button>\n    </form>\n    <hr/>'}function c(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(n[0].toUpperCase()).concat(n.slice(1),"Block")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=n,exports.col=o,exports.css=t,exports.block=r;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColumnsBlock=exports.ImageBlock=exports.TextBlock=exports.TitleBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=u();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?i(t):o}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("Method toHTML must be initialized")}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,"> ").concat(this.value," </").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"p":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,"> ").concat(this.value," </").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TextBlock=v;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.styles,n=e.imageStyles,r=e.alt,c=void 0===r?"":r;return(0,t.row)('<img style="'.concat((0,t.css)(n),'" src="').concat(this.value,'" alt="').concat(c,'" />'),(0,t.css)(o))}}]),c}();exports.ImageBlock=h;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options.styles,o=this.value.map(function(e){return(0,t.col)(e)});return(0,t.row)(o.join(""),(0,t.css)(e))}}]),c}();exports.ColumnsBlock=b;
},{"../utils":"FOZT"}],"idI0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Sidebar=void 0;var e=require("../utils"),t=require("./blocks");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function i(e,t,a){return t&&l(e.prototype,t),a&&l(e,a),e}var n=function(){function l(e,t){a(this,l),this.$el=document.querySelector(e),this.update=t,this.init()}return i(l,[{key:"init",value:function(){this.$el.insertAdjacentHTML("afterbegin",this.template),this.$el.addEventListener("submit",this.add.bind(this))}},{key:"add",value:function(e){var a;e.preventDefault();var l,i=e.target.name,n=e.target.value.value,r=e.target.styles.value,s=null===(a=e.target.imageStyles)||void 0===a?void 0:a.value;switch(i){case"title":l=new t.TitleBlock(n,{styles:r});break;case"text":l=new t.TextBlock(n,{styles:r});break;case"img":l=new t.ImageBlock(n,{styles:r,imageStyles:s});break;case"columns":l=new t.ColumnsBlock(n.split(","),{styles:r})}this.update(l),e.target.value.value=e.target.styles.value="",s&&(e.target.imageStyles.value="")}},{key:"template",get:function(){return[(0,e.block)("title"),(0,e.block)("text"),(0,e.block)("img"),(0,e.block)("columns")].join("")}}]),l}();exports.Sidebar=n;
},{"../utils":"FOZT","./blocks":"dDFO"}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),r=require("./sidebar");function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function t(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var o=function(){function t(e){n(this,t),this.model=e}return i(t,[{key:"init",value:function(){var n=this,t=new e.Site("#site");t.render(this.model);new r.Sidebar("#panel",function(e){n.model.push(e),t.render(n.model)})}}]),t}();exports.App=o;
},{"./site":"V48B","./sidebar":"idI0"}],"CrKI":[function(require,module,exports) {
module.exports="image.61dd97e5.png";
},{}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=s(require("./assets/image.png")),t=require("./classes/blocks");function s(e){return e&&e.__esModule?e:{default:e}}var l=[new t.TitleBlock("Конструктор сайтов на чистом JavaScript",{tag:"h2",styles:{"text-align":"center",background:"gray",color:"#fff"}}),new t.TextBlock("Here we go with some text",{tag:"p",styles:{}}),new t.ColumnsBlock(["111111111","222222222","333333333"],{styles:{}}),new t.ImageBlock(e.default,{styles:{display:"flex","justify-content":"center"},imageStyles:{width:"500px",height:"auto"},alt:"Picture"})];exports.model=l;
},{"./assets/image.png":"CrKI","./classes/blocks":"dDFO"}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/main.css");var e=require("./classes/app"),s=require("./model");new e.App(s.model).init();
},{"./styles/main.css":"jExt","./classes/app":"Z1kE","./model":"JDu1"}]},{},["Focm"], null)
//# sourceMappingURL=src.4f721cbc.js.map