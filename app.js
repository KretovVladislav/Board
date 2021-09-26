const board = document.querySelector('#board')
const SQUARES_NUMBER = 900
const colors = ['#E6E6FA','#D8BFD8','#DDA0DD','#DA70D','#EE82EE','#FF00FF','#FF00FF','#BA55D3','#9932CC','#9400D3','#8A2BE2','#8B008B','#800080','#9370DB','#7B68EE','#6A5ACD','#483D8B','#663399','#4B0082']

for (let i=0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors [index]
} 

