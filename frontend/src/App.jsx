// frontend/src/App.jsx

import HeroSection from "./components/HeroSection"
import UploadSection from "./components/UploadSection"
import DrawCanvas from "./components/DrawCanvas"
import WebcamSection from "./components/WebcamSection"

function App() {

  return (

    <main className="
      min-h-screen
      bg-[#020617]
      text-white
      overflow-x-hidden
    ">

      {/* Hero Section */}
      <HeroSection />

      {/* Upload Prediction */}
      <UploadSection />

      {/* Draw Canvas */}
      <DrawCanvas />

      {/* Live Webcam */}
      <WebcamSection />

    </main>
  )
}

export default App