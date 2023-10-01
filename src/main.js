import './app.css'
import App from './App.svelte'

function setDeviceHeight() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

window.addEventListener('resize', () => {
  setDeviceHeight()
})

setDeviceHeight()

const app = new App({
  target: document.getElementById('app')
})

export default app
