'use strict'

const imageCollection = [
    './img/7768E20B-F536-480F-AE55-97677347C680.jpeg',
    './img/C2F48C26-5EFF-4EEB-BCA8-D87990819306.jpeg'
]

const [btn,btnDisabled] = document.getElementsByClassName('btn')

const image = document.querySelector('.image')


image.setAttribute('src', imageCollection[0]);

btn.addEventListener('click', changeItem)

function changeItem(){
    for(const i of imageCollection){
        image.setAttribute('src', i)   
    }
}


/*......*/

btnDisabled.addEventListener('click', deactivatedButton)

function deactivatedButton({target}){
    target.setAttribute('disabled','true')
}

