const result = document.querySelector('#result');
const inputValue = document.querySelector('input');
const button = document.querySelector('button')

button.addEventListener('click', handleClick)

function handleClick(){
    
    const moeda = inputValue.value // recebe o valor do input
    const converter = moeda *5.65
    const convertido = converter.toFixed(2)
    result.innerHTML= "O valor em Ryo é $ "+convertido   
}