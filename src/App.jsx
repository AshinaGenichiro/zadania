import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import InteractiveCard from './components/InteractiveCard'
import Simple from './components/SimpleButton'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <InteractiveCard/>
    <Simple/>
    <h2>Moduł 10</h2>
    <Counter/>
    <LoginForm/>
    </>
  )
}

export default App
