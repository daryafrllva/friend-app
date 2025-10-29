import React from 'react'
import ScrollAnimation from './components/ScrollAnimation';
import Phone from './components/phone.jsx'
import FAQ from './components/faq.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="App">
        <ScrollAnimation />
        <Phone />
        <FAQ />
        <Footer />
    </div>
  )
}

export default App
