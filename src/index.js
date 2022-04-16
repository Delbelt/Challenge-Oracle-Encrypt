import { addEvent, getInputValue, getValueByRef, setValueByRef, showConsole } from './helpers/functions.js';

getInputValue(".textarea-encrypter", "#txt");

// test implementation: functions library
setValueByRef('.title_page', 'Delbelt - Encrypter');
showConsole(getValueByRef('.title_page').textContent);

setValueByRef('#txt', '0'); // test setValue

//var input = getValueByRef('.textarea-encrypter').value;
//showConsole(input);

addEvent('#btn-encrypt', encrypt, 'click');
addEvent('#btn-decrypt', decrypt, 'click');

function encrypt(event)
{
    event.preventDefault()

    if(getValueByRef('.textarea-encrypter').value.length < 1)
    {
        showConsole('Did not receive any message');
    }

    else
    {
        //showConsole(getValueByRef('.textarea-encrypter').value.length);
        showConsole('encrypted');
        setValueByRef('.textarea-result', 'encrypt');
    }
}

function decrypt(event)
{
    event.preventDefault()

    if(getValueByRef('.textarea-encrypter').value.length < 1)
    {
        showConsole('Did not receive any message');        
    }

    else
    {
        //showConsole(getValueByRef('.textarea-encrypter').value.length);
        showConsole('decrypted');
        setValueByRef('.textarea-result', 'decrypt');
    }
}
