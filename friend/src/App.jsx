import React from 'react'
import ScrollAnimation from './components/ScrollAnimation';
import FAQ from './components/faq.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="App">
        <ScrollAnimation />
        <div className="w-full flex flex-col items-center justify-center bg-white py-16">
          <div className="w-full flex justify-center py-8 px-4 lg:max-w-7xl">
            <div className="w-full aspect-video">
              <iframe 
                className="w-full h-full rounded-4xl" 
                src="https://www.youtube.com/embed/O_Q1hoEhfk4" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <FAQ />
        <Footer />
    </div>
  )
}

export default App
