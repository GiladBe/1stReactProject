import { getDefaultNormalizer } from '@testing-library/dom';
import React, { useState } from 'react';


function TextInput() {
    const [errors, setErrors] = useState(1)
    const [correctWords, setCorrectWord] = useState(1)
    const [wordCount, setWordCount] = useState(1)
    const [key, setKey] = useState('')
    const [word12, setWord12] = useState(getRandomWord)
    const [word11, setWord11] = useState(getRandomWord)
    const [word, setWord] = useState(getRandomWord)
    const [word1, setWord1] = useState(getRandomWord)
    const [word2, setWord2] = useState(getRandomWord)
    const [word3, setWord3] = useState(getRandomWord)
    const [word4, setWord4] = useState(getRandomWord)
    const [word5, setWord5] = useState(getRandomWord)


    function handleKeyDown(e) {
        // console.log(e.code)
        if (e.code === 'KeyQ' || e.code === 'KeyW' || e.code === 'KeyE' || e.code === 'KeyR' || e.code === 'KeyT' || e.code === 'KeyY' || e.code === 'KeyU' || e.code === 'KeyI' || e.code === 'KeyO' || e.code === 'KeyP' || e.code === 'KeyA' || e.code === 'KeyS' || e.code === 'KeyD' || e.code === 'KeyF' || e.code === 'KeyG' || e.code === 'KeyH' || e.code === 'KeyI' || e.code === 'KeyJ' || e.code === 'KeyK' || e.code === 'KeyL' || e.code === 'KeyZ' || e.code === 'KeyX' || e.code === 'KeyC' || e.code === 'KeyV' || e.code === 'KeyB' || e.code === 'KeyN' || e.code === 'KeyM' || e.code === 'Space' || e.code === 'Enter') {
            setKey(e.code)
            if (key != '') {
                document.getElementById(key).style.color = 'white'
            }
            document.getElementById(e.code).style.color = 'red'
            if (e.code == 'Space') {
                setWord12(word11)
                setWord11(word)
                setWord(word1)
                setWord1(word2)
                setWord2(word3)
                setWord3(word4)
                setWord4(word5)
                setWord5(getRandomWord)
                document.getElementById('word12').style.color=document.getElementById('word11').style.color
                document.getElementById('word11').style.color=document.getElementById('word').style.color
                let currentValue = document.getElementById('inputText').value
                let valueArr = currentValue.split(" ")
                if (!valueArr[0]) {
                    valueArr.shift()
                    currentValue = valueArr.join()
                }
                document.getElementById("inputText").value = ''
                if (currentValue == word1) {
                    document.getElementById('correctWords').innerText=`Number of Correct Words:${correctWords}`
                    setCorrectWord(correctWords+1) 
                    document.getElementById('word').style.color='green' 
                }
                else {
                    document.getElementById('errors').innerText=`Number of Errors:${errors}`
                    setErrors(errors+1)
                    document.getElementById('word').style.color='red'
                }
                document.getElementById('totalWords').innerText=`Total Words Typed:${wordCount}`
                setWordCount(wordCount+1)
            }


        }
    }
    function handleClick(){
        let initialSpeed = document.getElementById('correctWords').innerText.split(':')
        document.getElementById('speedTest').style='display: none;'
        document.getElementById('clock').style='display: block;'
        
        
let timer = 60
let myInterval = setInterval(() => {
    timer--
     document.getElementById('clock').innerText=timer
 }, 1000);
   
 
 
 
   setTimeout(() => {
       let finalSpeed = document.getElementById('correctWords').innerText.split(':')
       let speed = finalSpeed[1]- initialSpeed[1]
       document.getElementById('clock').style='display: none;'
       document.getElementById('speedTest').style='display: block;'
       document.getElementById('speed').innerText=`Latest Words per Minutes:${speed}`
       clearInterval(myInterval)

   }, 60000);
     

    }
    function getRandomWord() {
        let wordArr = [
            "abaca",
            "abacas",
            "abacist",
            "aback",
            "abacus",
            "abacuses",
            "abducting",
            "abduction",
            "abductions",
            "abductor",
            "abductors",
            "abelmosk",
            "abelmosks",
            "aberrance",
            "aberrances",
            "aberrancies",
            "aberrancy",
            "aberrant",
            "aberrantly",
            "abirritant",
            "abirritate",
            "abject",
            "abjection",
            "abjectly",
            "abominate",
            "abominated",
            "abominates",
            "abominating",
            "abomination",
            "abominations",
            "abominator",
            "academies",
            "academism",
            "academisms",
            "academy",
            "acaleph",
            "acanthaceous",
            "baluster",
            "balusters",
            "balustrade",
            "balustraded",
            "balustrades",
            "bambino",
            "bambinos",
            "bandicoots",
            "bandied",
            "bandier",
            "bandies",
            "bandiest",
            "banding",
            "bandit",
            "celestial",
            "celestially",
            "celestite",
            "celestites",
            "celibacy",
            "celibate",
            "highfalutin",
            "highflier",
            "highfliers",
            "highhanded",
            "dog",
            "cat",
            "nebulosity",
            "nebulous",
            "nebulously",
            "nebulousness",
            "necessarian",
            "necessaries",
            "necessarily",
            "man",
            "simonizing",
            "simony",
            "simoom",
            "simooms",
            "simp",
            "simpatico",
            "simper",
            "simpered",
            "simperer",
            "hello",
            "hi",
            "return",
            "hot",
            "fish",
            "many",
            "the",
            "cold",
            "this",
            "donate",
            "dinasour",
            "dolphin",
            "monkey",
            "mouse",
            "cold",]
        return wordArr[Math.floor(Math.random() * wordArr.length)]

    }



    return (<div>
        <div id='wordGenetator'><p id='word4'>{word4}</p> <p id='word3'>{word3}</p> <p id='word2'>{word2}</p><p id='word1'>{word1} </p><p id='word'>{word}</p><p id='word11'>{word11}</p><p id='word12'>{word12}</p></div>
        <input type="text" id="inputText" onKeyDown={handleKeyDown} autocomplete="off"></input>
        <div id='speedTest'><button id='speedButton' onClick={handleClick}>1 minute speed test</button></div>

    </div>)

}
export default TextInput