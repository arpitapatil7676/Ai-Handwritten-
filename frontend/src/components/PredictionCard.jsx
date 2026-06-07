const PredictionCard = ({
  digit,
  confidence
}) => {

  return (

    <div className="
      mt-10
      glass-card
      rounded-3xl
      p-10
      text-center
    ">

      <h2 className="
        text-4xl
        font-bold
        mb-6
      ">

        Prediction Result

      </h2>

      <div className="
        text-8xl
        font-extrabold
        gradient-text
        mb-6
      ">

        {digit}

      </div>

      <p className="
        text-2xl
        text-slate-300
      ">

        Confidence:
        <span className="
          text-pink-400
          font-bold
          ml-2
        ">

          {
            confidence !== null
              ? `${confidence}%`
              : "0%"
          }

        </span>

      </p>

    </div>
  )
}

export default PredictionCard