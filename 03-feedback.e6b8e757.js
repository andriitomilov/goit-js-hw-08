function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,o,a,i,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,a=o;return r=o=void 0,l=t,i=e.apply(a,n)}function E(e){return l=e,f=setTimeout(O,t),c?y(e):i}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=a}function O(){var e=g();if(S(e))return j(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?d(n,a-(e-l)):n}(e))}function j(e){return f=void 0,v&&r?y(e):(r=o=void 0,i)}function h(){var e=g(),n=S(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return E(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),i}return t=b(t)||0,p(n)&&(c=!!n.leading,a=(s="maxWait"in n)?m(b(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?i:j(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||i.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={formEl:document.querySelector(".feedback-form"),userEmailEl:document.querySelector("input"),userMessageEl:document.querySelector("textarea")};if(localStorage.getItem("feedback-form-state")){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e.email&&(y.userEmailEl.value=e.email),e.message&&(y.userMessageEl.value=e.message)}y.formEl.addEventListener("input",e(t)((e=>{let t=localStorage.getItem("feedback-form-state");t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.formEl.addEventListener("submit",(e=>{e.preventDefault(),y.userEmailEl.value&&y.userMessageEl.value?(y.formEl.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")):console.log("Enter email and message")}));
//# sourceMappingURL=03-feedback.e6b8e757.js.map
