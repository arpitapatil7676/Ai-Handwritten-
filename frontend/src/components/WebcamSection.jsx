import { useEffect, useRef, useState } from "react"
import Webcam from "react-webcam"
import axios from "axios"

const WebcamSection = () => {

  const webcamRef = useRef(null)

  const intervalRef = useRef(null)

  const [digit, setDigit] =
    useState(null)

  const [confidence, setConfidence] =
    useState(null)

  const [isPredicting, setIsPredicting] =
    useState(false)

  const predictFrame = async () => {

    if (!webcamRef.current) return

    try {

      const imageSrc =
        webcamRef.current.getScreenshot()

      if (!imageSrc) return

      const blob =
        await fetch(imageSrc)
        .then(res => res.blob())

      const formData = new FormData()

      formData.append(
        "file",
        blob,
        "frame.png"
      )

      const response =
        await axios.post(
          "http://127.0.0.1:8000/predict",
          formData
        )

      if (
        response.data.digit !== undefined
      ) {

        setDigit(
          response.data.digit
        )

        setConfidence(
          response.data.confidence
        )
      }

    } catch (error) {

      console.log(error)
    }
  }

  const startPrediction = () => {

    if (intervalRef.current) return

    setIsPredicting(true)

    intervalRef.current =
      setInterval(() => {

        predictFrame()

      }, 1500)
  }

  const stopPrediction = () => {

    clearInterval(
      intervalRef.current
    )

    intervalRef.current = null

    setIsPredicting(false)
  }

  useEffect(() => {

    return () => {

      if (intervalRef.current) {

        clearInterval(
          intervalRef.current
        )
      }
    }

  }, [])

  return (

    <section className="
      py-24
      px-6
    ">

      <div className="
        max-w-6xl
        mx-auto
      ">

        <div className="
          glass-card
          p-10
          rounded-3xl
        ">

          <h2 className="
            text-4xl
            font-bold
            text-center
            mb-10
            gradient-text
          ">

            Live Webcam Recognition

          </h2>

          <div className="
            relative
            flex
            justify-center
          ">

            <Webcam
              ref={webcamRef}
              screenshotFormat="image/png"
              className="
                rounded-3xl
                border
                border-slate-700
                w-full
                max-w-4xl
              "
            />

            <div className="
              absolute
              top-6
              left-6
              bg-black/70
              px-6
              py-4
              rounded-2xl
              backdrop-blur-xl
            ">

              <h3 className="
                text-xl
                font-bold
                mb-2
              ">

                Prediction

              </h3>

              <div className="
                text-6xl
                font-black
                gradient-text
              ">

                {
                  digit !== null
                  ? digit
                  : "-"
                }

              </div>

              <p className="
                text-pink-400
                text-lg
                mt-2
              ">

                Confidence:
                {" "}

                {
                  confidence !== null
                  ? `${confidence}%`
                  : "-"
                }

              </p>

            </div>

          </div>

          <div className="
            flex
            justify-center
            gap-6
            mt-10
          ">

            <button
              onClick={startPrediction}
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-green-500
                to-emerald-600
                font-semibold
              "
            >

              Start Live AI

            </button>

            <button
              onClick={stopPrediction}
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-red-500
                to-pink-600
                font-semibold
              "
            >

              Stop

            </button>

          </div>

          <div className="
            text-center
            mt-6
            text-slate-400
          ">

            {
              isPredicting
              ? "Live prediction running..."
              : "Live prediction stopped"
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default WebcamSection