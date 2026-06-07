// frontend/src/components/DrawCanvas.jsx

import { useRef, useState } from "react"
import { ReactSketchCanvas } from "react-sketch-canvas"
import axios from "axios"
import { motion } from "framer-motion"

import PredictionCard from "./PredictionCard"

const DrawCanvas = () => {

  const canvasRef = useRef(null)

  const [digit, setDigit] =
    useState(null)

  const [confidence, setConfidence] =
    useState(null)

  const [loading, setLoading] =
    useState(false)

  const handleClear = () => {

    canvasRef.current.clearCanvas()

    setDigit(null)

    setConfidence(null)
  }

  const handlePredict = async () => {

    try {

      setLoading(true)

      const image =
        await canvasRef.current.exportImage(
          "png"
        )

      const response =
        await fetch(image)

      const blob =
        await response.blob()

      const file =
        new File(
          [blob],
          "digit.png",
          {
            type: "image/png"
          }
        )

      const formData =
        new FormData()

      formData.append(
        "file",
        file
      )

      const result =
        await axios.post(
          "http://127.0.0.1:8000/predict",
          formData
        )

      setDigit(
        String(
          result.data.digit
        )
      )

      setConfidence(
        result.data.confidence
      )

    } catch (error) {

      console.error(error)

      alert(
        "Prediction failed"
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <section className="
      pb-24
      px-6
    ">

      <div className="
        max-w-4xl
        mx-auto
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

          Draw Digit for AI Prediction

        </h2>

        <div className="
          bg-black
          rounded-3xl
          overflow-hidden
        ">

          <ReactSketchCanvas
            ref={canvasRef}
            strokeWidth={4}
            strokeColor="white"
            canvasColor="black"
            width="100%"
            height="220px"
          />

        </div>

        <div className="
          flex
          justify-center
          gap-6
          mt-8
          flex-wrap
        ">

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={handlePredict}
            className="
              px-8
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-indigo-500
              via-purple-500
              to-pink-500
              text-lg
              font-semibold
            "
          >

            {
              loading
                ? "Predicting..."
                : "Predict Drawing"
            }

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={handleClear}
            className="
              px-8
              py-4
              rounded-2xl
              bg-slate-800
              hover:bg-slate-700
              transition-all
              duration-300
            "
          >

            Clear Canvas

          </motion.button>

        </div>

        {
          digit !== null && (

            <PredictionCard
              digit={digit}
              confidence={confidence}
            />
          )
        }

      </div>

    </section>
  )
}

export default DrawCanvas