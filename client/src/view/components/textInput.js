import React, { useState } from 'react';


function TextInput() {

    const [key, setKey] = useState('')

    function handleKeyDown(e) {
        console.log(e.code)
        if(e.code=='KeyQ'||e.code=='KeyW'||e.code=='KeyE'||e.code=='KeyR'||e.code=='KeyT'||e.code=='KeyY'||e.code=='KeyU'||e.code=='KeyI'||e.code=='KeyO'||e.code=='KeyP'||e.code=='KeyA'||e.code=='KeyS'||e.code=='KeyD'||e.code=='KeyF'||e.code=='KeyG'||e.code=='KeyH'||e.code=='KeyI'||e.code=='KeyJ'||e.code=='KeyK'||e.code=='KeyL'||e.code=='KeyZ'||e.code=='KeyX'||e.code=='KeyC'||e.code=='KeyV'||e.code=='KeyB'||e.code=='KeyN'||e.code=='KeyM'||e.code=='Space'||e.code=='Enter'){
            setKey(e.code)
            if (key != '') {
                document.getElementById(key).style.color = 'white'
            }
            document.getElementById(e.code).style.color = 'red'
    
            
        }


       

    }


    return (<input type="text" id="inputText" onKeyDown={handleKeyDown} ></input>)

}
export default TextInput