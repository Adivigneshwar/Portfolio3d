import React, { useState, useCallback } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import IntroLoader from './components/IntroLoader'

const App = () => {
  // isReady: set to true when 3D scene is loaded (passed down to Hero → callback)
  const [isReady, setIsReady] = useState(false);
  // showIntro: controls DOM presence of overlay (removed after exit animation ends)
  const [showIntro, setShowIntro] = useState(true);

  const handleSceneReady = useCallback(() => setIsReady(true), []);
  const handleIntroComplete = useCallback(() => setShowIntro(false), []);

  return (
    <>
      {showIntro && (
        <IntroLoader
          isReady={isReady}
          minDuration={3800}
          onComplete={handleIntroComplete}
        />
      )}
      <main>
        <Navbar />
        <Hero onSceneReady={handleSceneReady} />
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </main>
    </>
  )
}

export default App
