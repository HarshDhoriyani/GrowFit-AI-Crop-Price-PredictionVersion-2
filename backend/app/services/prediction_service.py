import joblib
import os
import pandas as pd

# This function will load your trained model pipeline
def load_model_pipeline(model_path):
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model pipeline file not found at: {model_path}")
    try:
        model_pipeline = joblib.load(model_path)
        return model_pipeline
    except Exception as e:
        raise RuntimeError(f"Error loading model pipeline from {model_path}: {e}")

# This function takes the input DataFrame and returns the prediction
def get_crop_prediction(input_df: pd.DataFrame, model_path: str):
    try:
        model_pipeline = load_model_pipeline(model_path)

        # The model_pipeline (which includes the preprocessor) will handle
        # the transformation of input_df into the format the regressor expects.
        prediction = model_pipeline.predict(input_df)[0]

        return float(prediction) # Ensure it's JSON serializable

    except Exception as e:
        print(f"Error in prediction service: {e}")
        raise # Re-raise to be caught by the route for error logging