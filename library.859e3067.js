async function e(e,t){try{const a=await fetch(e+"?"+new URLSearchParams(t));return await a.json()}catch(e){console.error(e)}}const t=(e,t)=>{const a=o(t);a&&window.localStorage.setItem(a,JSON.stringify(e))},a=e=>{const t=o(e);if(!t)return;const a=window.localStorage.getItem(t);return JSON.parse(a)},o=e=>"watched"===e?"movies-watched":"queue"===e?"movies-queue":(console.error("wronga type key in localStorage"),!1),n={setItem:t,getItem:a,removeItem:(e,n)=>{if(!o(n))return;const l=a(n);if(!l)return;const s=l.filter(((t,a)=>t!==e));t(s,n)}},l=document.querySelector("#loader"),s=document.querySelector("body");let d;const i=()=>{d=e=>{s.style.cursor="none",l.style.left=`${e.clientX}px`,l.style.top=`${e.clientY}px`,l.style.display="block"},document.addEventListener("mousemove",d)},c=()=>{s.style.cursor="auto",document.removeEventListener("mousemove",d),l.style.display="none"},r=document.querySelector("body"),m=document.querySelector(".overlay"),u=(document.querySelector(".modal__window"),document.querySelector(".modal__button-close")),_=document.querySelector(".modal__movie");let v={watched:null,queue:null};const p=e=>"UL"!==e.tagName&&("LI"!==e.tagName?p(e.parentElement):e),b=e=>{"Escape"!==e.key&&27!==e.keyCode||g(!1)},h=e=>{e.currentTarget===e.target&&g(!1)},g=e=>{if(e)return r.classList.add("noScroll"),void m.classList.remove("overlay--is-hidden");r.classList.remove("noScroll"),m.classList.add("overlay--is-hidden"),v.watched.removeEventListener("click",y),v.queue.removeEventListener("click",y),window.removeEventListener("keyup",b),m.removeEventListener("click",h)},y=(e,t)=>{const a=n.getItem(t);let o,l=[];if(a&&(l=[...a]),l.includes(e))return n.removeItem(e,t),v[t].classList.remove(`modal-movie__${t}`),void(v[t].innerText=`Add to ${t}`);l.push(e),n.setItem(l,t),"watched"===t&&(o="queue"),"queue"===t&&(o="watched"),n.removeItem(e,o),v[t].classList.add(`modal-movie__${t}`),v[t].innerText=`Remove from ${t}`,v[o].classList.remove(`modal-movie__${o}`),v[o].innerText=`Add to ${o}`},w=document.querySelector(".movies__list");function f(e,t){let a,o;a=null===e.poster_path?"https://europix.cc/no-poster.png":`https://image.tmdb.org/t/p/w500${e.poster_path}`,o=0===t.length?["Unknown"]:t;let n=`<li class="movie" data-id="${e.id}">\n        <img class="movie__img"\n          src=${a}\n          alt="${e.title} poster." loading="lazy" />\n        <h2 class="movie__title">${e.title}</h2>\n        <div class="movie__info">\n          <p class="movie__detail">\n            ${o.slice(0,4).join(", ")}\n          </p>\n          <p class="movie__detail">|</p>\n          <p class="movie__detail">${e.release_date.slice(0,4)}</>\n        </div>\n      </li>`;w.insertAdjacentHTML("beforeend",n)}const q=document.querySelector(".movies__list"),L=document.querySelector(".watched-button"),$=document.querySelector(".queue-button"),S=JSON.parse(localStorage.getItem("movies-queue")).length,k=JSON.parse(localStorage.getItem("movies-watched")).length;let E=()=>{if(q.innerHTML="",$.classList.remove("queue-button--active"),L.classList.add("watched-button--active"),0!==k){i(),JSON.parse(localStorage.getItem("movies-watched")).forEach((async t=>{e(`https://api.themoviedb.org/3/movie/${t}`,{api_key:"1d9e7558ae558dc94a5fda2c9843c8eb"}).then((e=>{let t=e.genres,a=[];for(let e=0;e<t.length;e++)a.push(t[e].name);f(e,a)}))})),c()}};E(),$.addEventListener("click",(()=>{if(q.innerHTML="",L.classList.remove("watched-button--active"),$.classList.add("queue-button--active"),0!==S){i(),JSON.parse(localStorage.getItem("movies-queue")).forEach((async t=>{e(`https://api.themoviedb.org/3/movie/${t}`,{api_key:"1d9e7558ae558dc94a5fda2c9843c8eb"}).then((e=>{let t=e.genres,a=[];for(let e=0;e<t.length;e++)a.push(t[e].name);f(e,a)}))})),c()}})),L.addEventListener("click",E),q.addEventListener("click",(async t=>{if(t.target.classList.contains("movie")&&i(),t.target===t.currentTarget)return;const a=p(t.target);if(!a)return;const o=a.dataset.id,l=await e(`https://api.themoviedb.org/3/movie/${o}`,{api_key:"1d9e7558ae558dc94a5fda2c9843c8eb",language:"en-US"});if(!1===l.success)return;const s=n.getItem("watched"),d=n.getItem("queue");let r,u,w="",f="",q="Add to watched",L="Add to queue";s&&s.includes(o)&&(w="modal-movie__watched",q="Remove from watched"),d&&d.includes(o)&&(f="modal-movie__queue",L="Remove from queue"),r=null===l.poster_path?"https://europix.cc/no-poster.png":`https://image.tmdb.org/t/p/w500${l.poster_path}`,u=0===l.genres.length?["Unknown"]:l.genres.map((e=>e.name)).join(", ");const $=`\n                <div class="modal-movie__container">\n                  <img src=${r}\n                    alt="${l.title} poster." class="modal-movie__picture" />\n                  <div class="modal-movie__information">\n                    <h3 class="modal-movie__title">${l.title}</h3>\n                    <table>\n                      <tbody class="modal-movie__table modal-table">\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Vote/Votes</td>\n                          <td class="modal-table__data modal-table__information">\n                            <span class="modal-table__number modal-table--orange">\n                              ${Math.round(10*l.vote_average)/10}\n                            </span> / \n                            <span class="modal-table__number modal-table--grey">\n                              ${l.vote_count}\n                            </span>\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Popularity</td>\n                          <td class="modal-table__data modal-table__information">\n                            ${Math.round(10*l.popularity)/10}\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Original Title</td>\n                          <td class="modal-table__data modal-table__information modal-table--uppercase">\n                            ${l.original_title}\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Genre</td>\n                          <td class="modal-table__data modal-table__information">\n                            ${u}\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class="modal-movie__overview">\n                      <h4 class="modal-movie__about">About</h4>\n                      <p class="modal-movie__description">\n                        ${l.overview}\n                      </p>\n                    </div>\n                    <div class="modal-movie__buttons movie-button">\n                      <button\n                        type="button"\n                        class="modal-movie__btn ${w}"\n                        data-idfilm=""\n                        data-btn="watched">\n                          ${q}\n                      </button>\n                      <button\n                        type="button"\n                        class="modal-movie__btn ${f}"\n                        data-idfilm=""\n                        data-btn="queue">\n                          ${L}\n                      </button>\n                    </div>\n                  </div>\n                </div>`;_.innerHTML=$,g(!0),window.addEventListener("keyup",b),m.addEventListener("click",h),v.watched=document.querySelector('[data-btn="watched"]'),v.queue=document.querySelector('[data-btn="queue"]'),v.watched.addEventListener("click",(e=>y(o,"watched"))),v.queue.addEventListener("click",(e=>y(o,"queue"))),c()})),u.addEventListener("click",(e=>g(!1)));
//# sourceMappingURL=library.859e3067.js.map
