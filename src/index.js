import { getValueByRef, setValueByRef, showConsole } from './helpers/functions.js';
import { controller } from './helpers/encrypter.js';

controller(); // implement complete logic of the program

// test implementation: functions library
setValueByRef('.title_page', 'Delbelt - Encrypter');
showConsole(getValueByRef('.title_page').textContent);
