function limitInputLength(inputField) {
    if (inputField.value.length > 5) {
        inputField.value = inputField.value.slice(0, 5);
    }
}

let celcius_input=document.querySelector('#celcius>input')
let fahrenheit_input=document.querySelector('#fahrenheit>input')
let kelvin_input=document.querySelector('#kelvin>input')
let rankine_input=document.querySelector('#rankine>input')
let btn=document.querySelector('.clear button')

function roundNumber(number){
    return Math.round(number*100)/100
}

// celcius to fahrenheit, kelvin and rankine
celcius_input.addEventListener('input',function(){
    let ctemp=parseFloat(celcius_input.value)
    let ftemp=(ctemp*(9/5))+32
    let ktemp=ctemp+273.15
    let rtemp=ctemp*9/5+491.67

    fahrenheit_input.value=roundNumber(ftemp)
    kelvin_input.value=roundNumber(ktemp)
    rankine_input.value=roundNumber(rtemp)
})

//fahrenheit to celcius, kelvin and rankine
fahrenheit_input.addEventListener('input',function(){
    let ftemp=parseFloat(fahrenheit_input.value)
    let ctemp=(ftemp-32)*(5/9)
    let ktemp=(ftemp-32)*(5/9)+273.15
    let rtemp=ftemp+459.67

    celcius_input.value=roundNumber(ctemp)
    kelvin_input.value=roundNumber(ktemp)
    rankine_input.value=roundNumber(rtemp)
})

//kelvin to celcius, fahrenheit and rankine
kelvin_input.addEventListener('input',function(){
    let ktemp=parseFloat(kelvin_input.value)
    let ctemp=(ktemp-32)*(5/9)
    let ftemp=(ktemp-32)*(5/9)+273.15
    let rtemp=ktemp+459.67

    celcius_input.value=roundNumber(ctemp)
    fahrenheit_input.value=roundNumber(ftemp)
    rankine_input.value=roundNumber(rtemp)
})

//rankine to celcius, fahrenheit and kelvin
rankine_input.addEventListener('input',function(){
    let rtemp=parseFloat(rankine_input.value)
    let ctemp=(rtemp-491.67)*5/9
    let ftemp=rtemp-459.67 
    let ktemp=rtemp/1.8

    celcius_input.value=roundNumber(ctemp)
    fahrenheit_input.value=roundNumber(ftemp)
    kelvin_input.value=roundNumber(ktemp)
})

btn.addEventListener('click',()=>{
    celcius_input.value=""
    fahrenheit_input.value=""
    kelvin_input.value=""
    rankine_input.value=""
})