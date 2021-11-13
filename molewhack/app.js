const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let CurrentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign id of the randomPosition for later use
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)

}

moveMole()

function countDown() {
    CurrentTime--
    timeLeft.textContent = CurrentTime

    if(CurrentTime === 0){
        clearInterval(timerId)
        alert('Game Over! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000)