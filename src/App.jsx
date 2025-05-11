import useCount from './hook/useCount'
import React  from 'react'
import MainClass from './component/mainClass'
import './App.css'

function App() {

  const { count, setCount } = useCount() // resuable custom hooks reusable

  return (
    <>
      <MainClass count={count} setCount= {setCount} />
    </>
  )
}

export default App
