import './App.css'
import Header from './components/Header'
import Mdi from './components/Mdi'
import Navi from './components/Navi'

function App() {
  return (
    <>
      <Header />
      <div className="flex pt-16">
        <Navi />
        <Mdi />
      </div>
    </>
  )
}

export default App
