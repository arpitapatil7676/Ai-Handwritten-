import { useEffect, useState } from "react"
import axios from "axios"
import { motion } from "framer-motion"

import PredictionCard from "./PredictionCard"
import { speakPrediction } from "../services/speech"

const UploadSection = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  const [preview, setPreview] = useState(null)

  const [digit, setDigit] = useState(null)

  const [confidence, setConfidence] = useState(null)

  const [loading, setLoading] = useState(false)

  const [history, setHistory] = useState([])

  useEffect(() => {

    const savedHistory =
      localStorage.getItem(
        "predictionHistory"
      )

    if (savedHistory) {

      setHistory(
        JSON.parse(savedHistory)
      )
    }

  }, [])

  const handleImageChange = (e) => {

    const file = e.target.files[0]

    if (!file) return

    setSelectedImage(file)

    setPreview(
      URL.createObjectURL(file)
    )
  }

  const handlePredict = async () => {

    if (!selectedImage) return

    try {

      setLoading(true)

      const formData = new FormData()

      formData.append(
        "file",
        selectedImage
      )

      const response =
        await axios.post(
          "http://127.0.0.1:8000/predict",
          formData
        )

      console.log(response.data)

      const predictedDigit =
        response.data.digit

      const predictionConfidence =
        response.data.confidence

      setDigit(
        predictedDigit
      )

      setConfidence(
        predictionConfidence
      )

      speakPrediction(
        predictedDigit
      )

      const historyItem = {

        digit: predictedDigit,

        confidence:
          predictionConfidence,

        time:
          new Date()
          .toLocaleString()

      }

      const updatedHistory = [
        historyItem,
        ...history
      ]

      setHistory(
        updatedHistory
      )

      localStorage.setItem(
        "predictionHistory",
        JSON.stringify(updatedHistory)
      )

    } catch (error) {

      console.error(error)

      alert("Prediction failed")

    } finally {

      setLoading(false)
    }
  }

  return (

    <section className="pb-24 px-6">

      <div className="max-w-5xl mx-auto">

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

            Upload Handwritten Digit

          </h2>

          <div className="
            border-2
            border-dashed
            border-slate-600
            rounded-3xl
            p-10
            text-center
          ">

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-6"
            />

            {
              preview && (

                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={preview}
                  alt="preview"
                  className="
                    w-52
                    mx-auto
                    rounded-2xl
                    mb-6
                  "
                />
              )
            }

            <button
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
                hover:scale-105
                transition-all
                duration-300
              "
            >

              {
                loading
                  ? "Predicting..."
                  : "Predict Digit"
              }

            </button>

            {
              digit !== null && (

                <PredictionCard
                  digit={digit}
                  confidence={confidence}
                />
              )
            }

          </div>

        </div>

      </div>

    </section>
  )
}

export default UploadSection