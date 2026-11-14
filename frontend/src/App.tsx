import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
  fetch('/api/').then(r => r.text()).then(console.log)
}, [])


  return (
    <>
      
    </>
  )
}

export default App
