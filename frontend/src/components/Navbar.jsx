import { motion } from "framer-motion"

const Navbar = () => {
  return (

    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full px-8 py-6 flex items-center justify-between"
    >

      <h1 className="text-2xl font-bold gradient-text">
        AI Digit Recognition
      </h1>

      <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300">
        Get Started
      </button>

    </motion.nav>
  )
}

export default Navbar