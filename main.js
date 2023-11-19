const player1 = 'X'
const player2 = 'O'
var winner = ''
var playTime = player1
var gameOver = false
var spaces = {}

var restartbutton = document.getElementById('restart')
const board = document.querySelector('#board')
    .querySelectorAll('div')


for (let i = 0; i < board.length; i++) {
    spaces[board[i].id] = board[i].innerHTML
}

updateShower = () => {
    let shower = document.querySelector('h1')

    if (playTime === player1) {
        shower.innerHTML = `Vez do Jogador: ${player1}`
    } else {
        shower.innerHTML = `Vez do Jogador: ${player2}`
    }
}

startGame = () => {
    for (let i = 0; i < Object.keys(spaces).length; i++) {
        board[i].addEventListener('click', () => {
            if (gameOver === false) {
                if (board[i].innerHTML === '') {
                    if (playTime === player1) {
                        board[i].innerHTML = player1
                        spaces[board[i].id] = player1
                        board[i].style.color = 'red'
    
                        playTime = player2
                    } else {
                        board[i].innerHTML = player2
                        spaces[board[i].id] = player2
                        board[i].style.color = 'blue'
    
                        playTime = player1
                    }
    
                    updateShower()
                }
                
                verifyWinner()
            }
        })
    }    
}

updateShower()
startGame()

verifyWinner = () => {
    if (gameOver === false && winner === '') {
        if (
            ((spaces.a1 === spaces.a2 && spaces.a1 === spaces.a3) ||
             (spaces.a1 === spaces.b1 && spaces.a1 === spaces.c1) ||
             (spaces.a1 === spaces.b2 && spaces.a1 === spaces.c3)) && spaces.a1 !== ''            
        ) {
            winner = spaces.a1
        } else if (
            ((spaces.b2 === spaces.a3 && spaces.b2 === spaces.c1) ||
             (spaces.b2 === spaces.a2 && spaces.b2 === spaces.c2) ||
             (spaces.b2 === spaces.b1 && spaces.b2 === spaces.b3)) && spaces.b2 !== ''
        ) {
            winner = spaces.b2
        } else if (
            ((spaces.c3 === spaces.b3 && spaces.c3 === spaces.a3) ||
             (spaces.c3 === spaces.c1 && spaces.c3 === spaces.c2)) && spaces.c3 !== ''
        ) {
            winner = spaces.c3
        }
    } 

    if (winner !== '') {
        gameOver = true
        setTimeout(() => {
            alert(`O Vencedor foi o jogador: ${winner}`)
        }, 50)
    
        restartbutton.style.opacity = 1
        restartbutton.addEventListener('click', () => {
            restart()
        })
    }
}

restart = () => {
    playTime = player1
    gameOver = false
    winner = ''
    for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = ''
        spaces[board[i].id] = board[i].innerHTML
    }

    updateShower()
    restartbutton.style.opacity = 0
}
