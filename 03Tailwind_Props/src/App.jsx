
import './App.css'
import Card from './Card'

function App() {
 let myObj={
  name:"Tanya Gupta",
  age:"21"
 }
//  let newArr=[12,3,4]     we can pass array and obj in props
  return (
    <>
    <Card name="Apple MacBook" btnText="Know More"/>
    <Card name="About HP" btnText="Read More"/>
    <Card name="Intel"/>
    </>
  )
}

export default App
