import tensorflow as tf

MODEL_PATH = "model/best_digit_model.keras"

model = tf.keras.models.load_model(MODEL_PATH)

print("✅ Model Loaded Successfully")