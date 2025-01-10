import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }


  return (
    <>
      <Main/>
      {showModal && (
        <Sidebar handleToggleModal={handleToggleModal} /> 
      )}
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
