import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
