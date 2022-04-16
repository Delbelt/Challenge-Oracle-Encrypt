import { addEvent, getValueByRef, setValueByRef, showConsole } from "./functions.js";

const buttonEncrypterDisabled = () =>
{
    if(getValueByRef('.textarea-encrypter').value.length > 0 && getValueByRef('#btn-encrypt').disabled)
    {  
        getValueByRef('#btn-encrypt').disabled = false;
        getValueByRef('#btn-decrypt').disabled = false;
    }

    else if (getValueByRef('.textarea-encrypter').value.length < 1)
    { 
        getValueByRef('#btn-encrypt').disabled = true;
        getValueByRef('#btn-decrypt').disabled = true;  
    }
}

const barProgress = (ref, setter) =>
{
    getValueByRef(ref).value = setter 
} 

const controller = () =>
{
    addEvent('#btn-encrypt', encrypt, 'click');
    addEvent('#btn-decrypt', decrypt, 'click');

    getValueByRef('.textarea-encrypter').addEventListener('keyup', (event) =>
    {
        setValueByRef('#txt', event.path[0].value.length)
        buttonEncrypterDisabled();
        barProgress(".bar-progress", event.path[0].value.length) 
    })       
}

function encrypt(event)
{
    event.preventDefault()

    if(getValueByRef('.textarea-encrypter').value.length < 1)
    {
        showConsole('Did not receive any message');
    }

    else
    {
        showConsole('encrypted');

        const message = getValueByRef('.textarea-encrypter').value;

        var prueba = "";

        for(var i = 0; i < message.length; i++)
        {
            switch(message[i])
            {
                case 'a' : prueba += message[i].replace("a", "ai"); break;
                case 'e' : prueba += message[i].replace("e", "enter"); break;
                case 'i' : prueba += message[i].replace("i", "imes"); break;
                case 'o' : prueba += message[i].replace("o", "ober"); break;
                case 'u' : prueba += message[i].replace("u", "ufat"); break;
                default  : prueba += message[i]; break;
            }     
        }
        
        setValueByRef('.textarea-result', prueba);
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
        showConsole('decrypted');

        const message = getValueByRef('.textarea-encrypter').value;

        var prueba = "";

        prueba = message.replaceAll("ai", "a");
        prueba = prueba.replaceAll("enter", "e");
        prueba = prueba.replaceAll("imes", "i");
        prueba = prueba.replaceAll("ober", "o");
        prueba = prueba.replaceAll("ufat", "u");

        setValueByRef('.textarea-result', prueba);
    }
}

export { controller }