!function(){function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},r.parcelRequired7c6=a),a.register("iY7oS",(function(e,r){t(e.exports,"API_KEY",(function(){return n}));var n="1d9e7558ae558dc94a5fda2c9843c8eb"})),a.register("igQOg",(function(r,n){t(r.exports,"fetchJsonResponse",(function(){return c}));var o=a("bpxeT"),i=a("2TvXO");function c(t,e){return u.apply(this,arguments)}function u(){return(u=e(o)(e(i).mark((function t(r,n){var o,a;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(r+"?"+new URLSearchParams(n));case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}})),a.register("bpxeT",(function(t,e){"use strict";function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var r=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new T(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",m={};function h(){}function y(){}function g(){}var _={};u(_,a,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&n.call(w,a)&&(_=w);var x=g.prototype=h.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,u(x,"constructor",g),u(g,"constructor",y),y.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a.register("jkJzp",(function(r,n){t(r.exports,"displayMovieCard",(function(){return p})),t(r.exports,"moviesListRender",(function(){return v}));var o=a("bpxeT"),i=a("2TvXO"),c=a("igQOg"),u=a("iY7oS"),s=document.querySelector(".movies__list");function l(){return d.apply(this,arguments)}function d(){return(d=e(o)(e(i).mark((function t(){var r,n;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.fetchJsonResponse)("https://api.themoviedb.org/3/genre/movie/list",{api_key:u.API_KEY,language:"en-US"});case 3:return r=t.sent,n=r.genres,t.abrupt("return",n);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t,e){var r=[];return t.genre_ids.forEach((function(t){var n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var u=i.value;t===u.id&&r.push(u.name)}}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}})),r}function p(t,e){var r,n;r=null===t.poster_path?"https://europix.cc/no-poster.png":"https://image.tmdb.org/t/p/w500".concat(t.poster_path),n=0===e.length?["Unknown"]:e;var o='<li class="movie" data-id="'.concat(t.id,'">\n        <img class="movie__img"\n          src=').concat(r,'\n          alt="').concat(t.title,' poster." loading="lazy" />\n        <h2 class="movie__title">').concat(t.title,'</h2>\n        <div class="movie__info">\n          <p class="movie__detail">\n            ').concat(n.slice(0,4).join(", "),'\n          </p>\n          <p class="movie__detail">|</p>\n          <p class="movie__detail">').concat(t.release_date.slice(0,4),"</>\n        </div>\n      </li>");s.insertAdjacentHTML("beforeend",o)}function v(t){return m.apply(this,arguments)}function m(){return(m=e(o)(e(i).mark((function t(r){var n;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s.innerHTML="",t.next=4,l();case 4:n=t.sent,r.forEach((function(t){p(t,f(t,n))})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}})),a.register("8AEpj",(function(r,n){t(r.exports,"modalMovie",(function(){return y})),t(r.exports,"closeModal",(function(){return _}));var o,i=a("bpxeT"),c=a("8nrFW"),u=a("2TvXO"),s=a("igQOg"),l=a("iY7oS"),d=a("UL92Z"),f=a("kvC6y"),p=document.querySelector(".overlay"),v=(document.querySelector(".modal__window"),document.querySelector(".modal__button-close")),m=document.querySelector(".modal__movie"),h={watched:null,queue:null},y=(o=e(i)(e(u).mark((function t(r){var n,o,a,i,c,v,y,_,k,E,S,O;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,f.trackMousePosition)(),r.target!==r.currentTarget){t.next=3;break}return t.abrupt("return");case 3:if(n=g(r.target)){t.next=6;break}return t.abrupt("return");case 6:return o=n.dataset.id,t.next=9,(0,s.fetchJsonResponse)("https://api.themoviedb.org/3/movie/".concat(o),{api_key:l.API_KEY,language:"en-US"});case 9:if(!1!==(a=t.sent).success){t.next=12;break}return t.abrupt("return");case 12:i=d.moviesStorage.getItem("watched"),c=d.moviesStorage.getItem("queue"),v="",y="",_="Add to watched",k="Add to queue",i&&i.includes(o)&&(v="modal-movie__watched",_="Remove from watched"),c&&c.includes(o)&&(y="modal-movie__queue",k="Remove from queue"),E=null===a.poster_path?"https://europix.cc/no-poster.png":"https://image.tmdb.org/t/p/w500".concat(a.poster_path),S=0===a.genres.length?["Unknown"]:a.genres.map((function(t){return t.name})).join(", "),O='\n                <div class="modal-movie__container">\n                  <img src='.concat(E,'\n                    alt="').concat(a.title,' poster." class="modal-movie__picture" />\n                  <div class="modal-movie__information">\n                    <h3 class="modal-movie__title">').concat(a.title,'</h3>\n                    <table>\n                      <tbody class="modal-movie__table modal-table">\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Vote/Votes</td>\n                          <td class="modal-table__data modal-table__information">\n                            <span class="modal-table__number modal-table--orange">\n                              ').concat(Math.round(10*a.vote_average)/10,'\n                            </span> / \n                            <span class="modal-table__number modal-table--grey">\n                              ').concat(a.vote_count,'\n                            </span>\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Popularity</td>\n                          <td class="modal-table__data modal-table__information">\n                            ').concat(Math.round(10*a.popularity)/10,'\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Original Title</td>\n                          <td class="modal-table__data modal-table__information modal-table--uppercase">\n                            ').concat(a.original_title,'\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Genre</td>\n                          <td class="modal-table__data modal-table__information">\n                            ').concat(S,'\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class="modal-movie__overview">\n                      <h4 class="modal-movie__about">About</h4>\n                      <p class="modal-movie__description">\n                        ').concat(a.overview,'\n                      </p>\n                    </div>\n                    <div class="modal-movie__buttons movie-button">\n                      <button\n                        type="button"\n                        class="modal-movie__btn ').concat(v,'"\n                        data-idfilm=""\n                        data-btn="watched">\n                          ').concat(_,'\n                      </button>\n                      <button\n                        type="button"\n                        class="modal-movie__btn ').concat(y,'"\n                        data-idfilm=""\n                        data-btn="queue">\n                          ').concat(k,"\n                      </button>\n                    </div>\n                  </div>\n                </div>"),m.innerHTML=O,x(!0),window.addEventListener("keyup",b),p.addEventListener("click",w),h.watched=document.querySelector('[data-btn="watched"]'),h.queue=document.querySelector('[data-btn="queue"]'),h.watched.addEventListener("click",(function(t){return L(o,"watched")})),h.queue.addEventListener("click",(function(t){return L(o,"queue")})),(0,f.stopTrackingMousePosition)();case 34:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),g=function(t){return"UL"!==t.tagName&&("LI"!==t.tagName?g(t.parentElement):t)},_=function(){v.addEventListener("click",(function(t){return x(!1)}))},b=function(t){"Escape"!==t.key&&27!==t.keyCode||x(!1)},w=function(t){t.currentTarget===t.target&&x(!1)},x=function(t){if(t)return p.classList.remove("overlay--is-hidden"),void p.classList.add("noscroll");p.classList.remove("noscroll"),p.classList.add("overlay--is-hidden"),h.watched.removeEventListener("click",L),h.queue.removeEventListener("click",L),window.removeEventListener("keyup",b),p.removeEventListener("click",w)},L=function(t,r){var n,o=d.moviesStorage.getItem(r),a=[];if(o&&(a=e(c)(o)),a.includes(t))return d.moviesStorage.removeItem(t,r),h[r].classList.remove("modal-movie__".concat(r)),void(h[r].innerText="Add to ".concat(r));a.push(t),d.moviesStorage.setItem(a,r),"watched"===r&&(n="queue"),"queue"===r&&(n="watched"),d.moviesStorage.removeItem(t,n),h[r].classList.add("modal-movie__".concat(r)),h[r].innerText="Remove from ".concat(r),h[n].classList.remove("modal-movie__".concat(n)),h[n].innerText="Add to ".concat(n)}})),a.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return r.default(t)||n.default(t)||i.default(t)||o.default()};var r=c(a("kMC0W")),n=c(a("7AJDX")),o=c(a("8CtQK")),i=c(a("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return n.default(t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return n.default(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(t,e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("UL92Z",(function(e,r){t(e.exports,"moviesStorage",(function(){return i}));var n=function(t,e){var r=a(e);r&&window.localStorage.setItem(r,JSON.stringify(t))},o=function(t){var e=a(t);if(e){var r=window.localStorage.getItem(e);return JSON.parse(r)}},a=function(t){return"watched"===t?"movies-watched":"queue"===t?"movies-queue":(console.error("wronga type key in localStorage"),!1)},i={setItem:n,getItem:o,removeItem:function(t,e){if(a(e)){var r=o(e);if(r){var i=r.filter((function(e,r){return e!==t}));n(i,e)}}}}})),a.register("kvC6y",(function(e,r){t(e.exports,"trackMousePosition",(function(){return i})),t(e.exports,"stopTrackingMousePosition",(function(){return c}));var n,o=document.querySelector("#loader"),a=document.querySelector("body"),i=function(){n=function(t){a.style.cursor="none",o.style.left="".concat(t.clientX,"px"),o.style.top="".concat(t.clientY,"px"),o.style.display="block"},document.addEventListener("mousemove",n)},c=function(){a.style.cursor="auto",document.removeEventListener("mousemove",n),o.style.display="none"}}))}();
//# sourceMappingURL=index.c4e01086.js.map
