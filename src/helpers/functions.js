const getValueByRef = (ref) => document.querySelector(ref);

const setValueByRef = (ref, setter) => getValueByRef(ref).textContent=setter;

const showConsole = (data, ...params) => console.log(data, ...params);

const addEvent = (ref, func, event) => getValueByRef(ref).addEventListener(event, func);

export { getValueByRef, setValueByRef, showConsole, addEvent };
