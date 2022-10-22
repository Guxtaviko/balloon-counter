import { createBalloon } from './balloons'
import './style.css'

const decrease = document.querySelector('.decrease') as HTMLButtonElement
const increase = document.querySelector('.increase') as HTMLButtonElement
const counter = document.querySelector('.counter')!

export const setupCounter = (type: string) => {
  const count = document.querySelectorAll('.balloon').length
  if(count <= 0) {
    decrease.disabled = true
  } else if (decrease.disabled){
    decrease.disabled = false
  }

  if(count >= 99) {
    increase.disabled = true
  } else if (increase.disabled) {
    increase.disabled = false
  }

  counter.innerHTML = `<div class=${type}> ${count} </div>`
}

setupCounter('')

decrease.addEventListener('click', () => {
  const balloons = document.querySelectorAll('.balloon')
  const clickEvent = new Event('click')
  balloons[balloons.length-1].querySelector('.balloon__img')?.dispatchEvent(clickEvent)

  blink(decrease)
  setupCounter('prev')
})

increase.addEventListener('click', () => {
  blink(increase)
  createBalloon()
  setupCounter('next')
})

const blink = (btn: HTMLButtonElement) => {
  btn.style.opacity = '0.5'
  setTimeout(() => {
    btn.style.opacity = '1'
  }, 200);
}

// const popSound = new Audio('/audio/pop.wav')
// const balloon = new Image(200)
// balloon.src = '/assets/blue-balloon/1.png'
// balloonsContainer.appendChild(balloon)

// let frame = 1
// const colors = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'yellow']
// const color = colors[Math.floor(Math.random() * colors.length)]
// balloon.addEventListener('click', () => {
//   popSound.play()
//   const animate = setInterval(() => {
//     if(frame == 6) {
//       clearInterval(animate)
//       balloonsContainer.removeChild(balloon)
//     }
//     balloon.src = `/assets/${color}-balloon/${frame++}.png`
//   }, 50);
// })

