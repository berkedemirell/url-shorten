

import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Shorten from './components/Shorten'
import Statistics from './components/Statistics'
import Last from './components/Last'
import Footer from './components/Footer'

function App() {


  return (
    <div className='w-full h-fit'>
      <div className='bg-mainWhite'>
        <Navbar/>
        <Header/>
      </div>
      <div className='bg-lightGray'>
        <Shorten/>
        <Statistics/>
        <Last/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
