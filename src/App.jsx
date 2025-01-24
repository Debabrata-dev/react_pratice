import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [count,setCount]=useState(0);

useEffect(()=>{
  setTimeout(()=>{
    setCount(count=>count+1)
  },2000)
},[count])
//to continuous ly update in ui we do useEffect statement
//when we use empty array it will execut ony once
  return (
   <>
   <h1>I 've render {count} Times</h1>
   </>
  )
}

export default App
