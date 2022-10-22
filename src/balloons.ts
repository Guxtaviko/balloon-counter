import { setupCounter } from "./main"

const container = document.querySelector('.balloons') as HTMLElement
const popSound = new Audio('/audio/pop.wav')
const colors = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']
const size = 200
const y = window.innerHeight - size/2

export const createBalloon = () => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    const x = Math.random() * (window.innerWidth - size)

    const balloon = document.createElement('div')
    balloon.classList.add('balloon')
    balloon.style.top = y.toString() + 'px'
    balloon.style.left = x.toString() + 'px'

    const img = new Image(size)
    img.src = `/assets/${color}-balloon/1.png`
    img.classList.add('balloon__img')

    img.addEventListener('click', () => {
        let frame = 2
        popSound.play()
        const pop = setInterval(() => {
            if(frame == 6) {
            clearInterval(pop)
            container.removeChild(balloon)
            setupCounter('prev')
            }
            img.src = `/assets/${color}-balloon/${frame++}.png`
        }, 50);
    })

    const string = new Image()
    string.height = size
    string.src = '/assets/string.png'
    string.classList.add('balloon__string')

    balloon.appendChild(img)
    balloon.appendChild(string)
    container.appendChild(balloon)

    goUp(balloon)
}

const goUp = (balloon: HTMLElement) => {
    const speed = Math.round(Math.random() * (20 - 5) + 5)
    let height = y
    const elevate = setInterval(() => {
        if (height > -18) {
            height--
            balloon.style.top = height.toString() + 'px'
        } else clearInterval(elevate)
    }, speed)
}