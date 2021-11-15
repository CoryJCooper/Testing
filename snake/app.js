document.addEventListener('DOMContentLoaded', () => {
const squares = document.querySelectorAll('.grid div')
const scoreDisplay = document.querySelector('span')
const startBtn = document.querySelectorAll('.start')

const width = 10
let currentIndex = 0 //1st div in grid
let appleIndex = 0 //1st div in rid
let currentSnake = [2,1,0] //2=head 0=tail
let direction = 1
let score = 0
let speed = 0
let intervalTime = 0
let interval = 0

//start and restart game
function startGame(){
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    Score = 0
    //randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
}

//Outcome Manager
function moveOutcomes(){

    //Collision Detection
    if(
        (currentSnake[0] + width >= (width * width) && direction === width) || //Hit Bottom Wall
        (currentSnake[0] % width === width -1 && direction === 1) || //Hit Right Wall
        (currentSnake[0] % width == 0 && direction === -1) //Hit Left Wall
        (currentSnake[0] - width < 0 && direction === -width) //Hit Top Wall
        squares[currentSnake[0] + direction].classList.contains('snake') //Hit Self
    ){
        return clearInterval(interval) //Clears interval if collision detected
    }
    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)

    //Apple Detection
    if(squares[currentSnake[0]].classList.contains('apple')){
        squares[currentSnake[0]].classList.remove('apple')
        squares[tail].classList.add('snake')
        currentSnake.push(tail)
        //randomApple()
        score++
        scoreDisplay.textContent = score
        clearInterval(interval)
        intervalTime = intervalTime * speed
        interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
}


//assign functions to keycodes
function control(e){
    squares[currentIndex].classList.remove('snake')

    if(e.keycode === 39){
        direction = 1 //Right Key
    } else if (e.keycode === 38){
        direction = -width //Up Key
    } else if(e.keycode === 37){
        direction = -1 //Left Key
    } else if(e.keycode === 39){
        direction = +width //Down Key
    }
}

document.addEventListener('keyup', control)
startBtn.addEventListener('click', startGame)

})