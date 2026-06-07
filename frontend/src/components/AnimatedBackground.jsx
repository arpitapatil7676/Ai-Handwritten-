const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10">

      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

    </div>
  )
}

export default AnimatedBackground