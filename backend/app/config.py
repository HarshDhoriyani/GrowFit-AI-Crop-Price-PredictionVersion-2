import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'a_super_secret_key_for_growfit'
    # Define the path to your trained model
    MODEL_PATH = os.path.join(os.getcwd(), 'models', 'crop_prediction_model_pipeline.pkl')