import { addEvent, getValueByRef, setValueByRef, showConsole } from './functions.js';

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
    addEvent('#btn-copy', copyText , 'click');

    getValueByRef('.textarea-encrypter').addEventListener('keyup', (event) =>
    {
        //setValueByRef('#txt', event.path[0].value.length)
        buttonEncrypterDisabled();
        //barProgress('.bar-progress', event.path[0].value.length) 
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
        showConsole('encrypted!');

        const message = getValueByRef('.textarea-encrypter').value;

        var prueba = '';

        for(var i = 0; i < message.length; i++)
        {
            switch(message[i])
            {
                case 'a' : prueba += message[i].replace('a', 'ai'); break;
                case 'e' : prueba += message[i].replace('e', 'enter'); break;
                case 'i' : prueba += message[i].replace('i', 'imes'); break;
                case 'o' : prueba += message[i].replace('o', 'ober'); break;
                case 'u' : prueba += message[i].replace('u', 'ufat'); break;
                default  : prueba += message[i]; break;
            }     
        }

        if(prueba === message)
        {
            if(! getValueByRef('#btn-copy').disabled)
            {
                getValueByRef('#btn-copy').disabled = true;
                showConsole("ENTROO")
            }

            if(prueba === prueba.toUpperCase())
            {
                setValueByRef('.textarea-result', '');
                getValueByRef('.textarea-result').placeholder = "Can't encrypt upper case";                 
            }

            else if(getValueByRef('.textarea-result').value.length > 0)
            {
                setValueByRef('.textarea-result', '');
                getValueByRef('.textarea-result').placeholder = 'Text is already encrypt!';
            }
            else
            {
                getValueByRef('.textarea-result').placeholder = 'Text is already encrypt!';
            }       
        }

        else
        {
            setValueByRef('.textarea-result', prueba);
            getValueByRef('#btn-copy').disabled = false;
        }
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
        showConsole('decrypted!');

        const message = getValueByRef('.textarea-encrypter').value;

        var prueba = '';

        prueba = message.replaceAll('ai', 'a');
        prueba = prueba.replaceAll('enter','e');
        prueba = prueba.replaceAll('imes', 'i');
        prueba = prueba.replaceAll('ober', 'o');
        prueba = prueba.replaceAll('ufat', 'u');

        if(prueba === message)
        { 
            if(! getValueByRef('#btn-copy').disabled)
            {
                getValueByRef('#btn-copy').disabled = true;
            }

            if(prueba === prueba.toUpperCase())
            {
                setValueByRef('.textarea-result', '');
                getValueByRef('.textarea-result').placeholder = "Can't decrypt upper case";                
            }

            else if(getValueByRef('.textarea-result').value.length > 0)
            {
                setValueByRef('.textarea-result', '');
                getValueByRef('.textarea-result').placeholder = 'Text is already decrypt!'; 
            }
            else
            {
                getValueByRef('.textarea-result').placeholder = 'Text is already decrypt!'; 
            }  
        }

        else
        {
            setValueByRef('.textarea-result', prueba);  
            getValueByRef('#btn-copy').disabled = false;
        }          
    }
}

function copyText()
{
    navigator.clipboard.writeText(getValueByRef('.textarea-result').value);

    setValueByRef('#msg-copy', 'Copied to clipboard!');
    setTimeout(() => setValueByRef('#msg-copy', '') , 1000);    
}

export { controller }
