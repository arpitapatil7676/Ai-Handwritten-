import cv2
import numpy as np


def preprocess_image(image):

    # Convert to grayscale
    gray = cv2.cvtColor(
        image,
        cv2.COLOR_BGR2GRAY
    )

    # Invert colors
    gray = cv2.bitwise_not(gray)

    # Blur
    blurred = cv2.GaussianBlur(
        gray,
        (5, 5),
        0
    )

    # Threshold
    thresh = cv2.threshold(
        blurred,
        0,
        255,
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )[1]

    # Find contours
    contours, _ = cv2.findContours(
        thresh,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    # Blank image fallback
    if len(contours) == 0:

        blank = np.zeros(
            (28, 28),
            dtype=np.float32
        )

        return blank.reshape(
            1,
            28,
            28,
            1
        )

    # Largest contour
    contour = max(
        contours,
        key=cv2.contourArea
    )

    x, y, w, h = cv2.boundingRect(
        contour
    )

    digit = thresh[
        y:y+h,
        x:x+w
    ]

    # Resize keeping aspect ratio
    h_digit, w_digit = digit.shape

    if h_digit > w_digit:

        new_h = 20

        new_w = int(
            w_digit * (20 / h_digit)
        )

    else:

        new_w = 20

        new_h = int(
            h_digit * (20 / w_digit)
        )

    resized = cv2.resize(
        digit,
        (new_w, new_h)
    )

    # Create 28x28 canvas
    canvas = np.zeros(
        (28, 28),
        dtype=np.uint8
    )

    x_offset = (28 - new_w) // 2
    y_offset = (28 - new_h) // 2

    canvas[
        y_offset:y_offset+new_h,
        x_offset:x_offset+new_w
    ] = resized

    # Normalize
    normalized = (
        canvas.astype("float32")
        / 255.0
    )

    # Reshape correctly
    reshaped = normalized.reshape(
        1,
        28,
        28,
        1
    )

    return reshaped