const getValueById = (id) => document.getElementById(id).innerHTML;

const setValueById = (id, setter) => document.getElementById(id).innerHTML=setter;

const getValueByClass = (className) => document.querySelector(className);

const setValueByClass = (className, setter) => className.textContent=setter;

const showConsole = (data) => console.log(data);

export {getValueById, getValueByClass, setValueById, setValueByClass, showConsole};