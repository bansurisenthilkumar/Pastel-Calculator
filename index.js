const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
let calculations =[]
let accumulativecalc
function playMusic(){
  var music = new Audio('mouse-click-290204.mp3');
  music.play();
  }
function calculate(button){
    const value = button.textContent
    if(value === "CLEAR"){
        calculations =[]
        screenDisplay.textContent = "."
    } else if(value==="="){
        console.log(accumulativecalc)
        screenDisplay.textContent = eval(accumulativecalc)
    }else{
        calculations.push(value)
        accumulativecalc = calculations.join('')
        screenDisplay.textContent = accumulativecalc
}
    }
    
buttons.forEach(button=>button.addEventListener('click',()=>calculate(button)))
buttons.forEach(button=>button.addEventListener('click',()=>playMusic()))