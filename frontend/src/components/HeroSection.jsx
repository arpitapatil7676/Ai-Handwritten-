import { motion } from "framer-motion"

const HeroSection = () => {
  return (

    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight mb-8"
        >

          <span className="gradient-text">
            AI Handwritten
          </span>

          <br />

          Digit Recognition System

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-slate-300 text-xl max-w-3xl mx-auto leading-relaxed"
        >

          Professional AI-powered handwritten digit recognition platform
          using deep learning, real-time prediction, webcam detection,
          interactive canvas drawing, and intelligent analytics.

        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >

          <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg font-semibold hover:scale-105 transition-all duration-300">

            Start Predicting

          </button>

        </motion.div>

      </div>

    </section>
  )
}

export default HeroSection