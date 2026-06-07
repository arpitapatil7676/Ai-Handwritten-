from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

import numpy as np
import cv2

from app.model_service import model
from app.preprocessing import preprocess_image

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Home Route
@app.get("/")
def home():

    return {
        "message":
        "AI Digit Recognition API Running"
    }

# Prediction Route
@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):

    try:

        # Read uploaded image
        contents = await file.read()

        # Convert image bytes
        np_array = np.frombuffer(
            contents,
            np.uint8
        )

        # Decode image
        image = cv2.imdecode(
            np_array,
            cv2.IMREAD_COLOR
        )

        # Preprocess image
        processed = preprocess_image(
            image
        )

        # Predict using model
        prediction = model.predict(
            processed
        )

        # Get digit
        digit = int(
            np.argmax(prediction)
        )

        # Get confidence
        confidence = float(
            np.max(prediction)
        )

        # Return response
        return {

            "digit": digit,

            "confidence": round(
                confidence * 100,
                2
            )
        }

    except Exception as e:

        return {

            "error": str(e)
        }