export const speakPrediction = (digit) => {

  const speech =
    new SpeechSynthesisUtterance(
      `Predicted digit is ${digit}`
    )

  speech.rate = 1

  speech.pitch = 1

  speech.volume = 1

  window.speechSynthesis.speak(
    speech
  )
}