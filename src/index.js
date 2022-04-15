import {getValueByClass, setValueByClass} from "./helpers/functions.js";

// test implementation: functions library
var titulo = getValueByClass(".title_page");
setValueByClass(titulo, "Delbelt - Encrypter");

console.log("Value:", titulo.textContent); // check index.js found