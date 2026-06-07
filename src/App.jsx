import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import InteractiveCard from './components/InteractiveCard'
import Simple from './components/SimpleButton'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import CartCounter from './components/CartCounter'
import ListManger from './components/ListManager'
import ContactForm from './components/ContactForm'
import ValidateForm from './components/ValidateForm'
import ToDolist from './components/ToDolist'
import ListaStudentow from './components/ListaStudentow'
import Card from './components/Card'
import Counter2 from './components/Counter2'
import Alert from './components/Alert'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Moduł 10</h2>
    <InteractiveCard/>
    <Simple/>
    <h2>Moduł 11</h2>
    <Counter/>
    <LoginForm/>
    <h2>Moduł 13</h2>
    <CartCounter/>
    <br></br>
    <ListManger/>
    <h2>Moduł 14</h2>
    <ContactForm/>
    <ValidateForm/>
    <h2>Moduł 15</h2>
    <ToDolist/>
    <ListaStudentow/>
    <h2>Moduł 18</h2>
    <Card/>
    <Counter2/>
    <h2>Moduł 19</h2>
    <Header/>
    <Alert type="success"/>
    <Alert type="warning"/>
    <Alert type="danger"/>

    <Footer/>
    </>
  )
}

export default App
