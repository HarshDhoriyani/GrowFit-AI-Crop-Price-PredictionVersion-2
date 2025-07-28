# GrowFit-AI-Crop-Price-PredictionVersion-2

This project aims to provide AI-powered crop price predictions to help farmers and agricultural stakeholders make informed decisions.

## Project Structure

- `backend/`: Contains the Flask web application, including:
    - `app/`: The core Flask application code (routes, services, templates, static files).
    - `models/`: Where the trained machine learning model is stored.
    - `run.py`: Script to run the Flask application.
    - `requirements.txt`: Python dependencies.
    - `.flaskenv`: Local environment variables (not committed to Git).
- `data/`: Placeholder for raw and processed datasets (ignored by Git).
- `models/`: Directory to store saved AI model files (e.g., `crop_prediction_model_pipeline.pkl`).
- `notebooks/`: Jupyter notebooks for data exploration, model training, and experimentation.
- `tests/`: Unit and integration tests for the application.

## Setup and Run Locally

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/HarshDhoriyani/GrowFit-AI-Crop-Price-PredictionVersion-2.git](https://github.com/HarshDhoriyani/GrowFit-AI-Crop-Price-PredictionVersion-2.git) # Update with your actual repo
    cd GrowFit-AI-Crop-Price-Prediction
    ```

2.  **Create and activate a Python virtual environment:**
    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Place your trained model:**
    Ensure your trained model pipeline (`crop_prediction_model_pipeline.pkl`) is located in the `models/` directory at the project root level (i.e., `GrowFit-AI-Crop-Price-PredictionVersion-2/models/crop_prediction_model_pipeline.pkl`).

5.  **Set up environment variables:**
    Create a `.flaskenv` file in the `backend/` directory with the following content:
    ```
    FLASK_APP=run.py
    FLASK_ENV=development
    SECRET_KEY=your_super_secret_key_for_development # Replace with a strong, random key
    ```
    **Note:** This file is for local development only and is ignored by Git. For production, set these environment variables directly on your hosting platform.

6.  **Run the Flask application:**
    ```bash
    flask run
    # Or, if flask run doesn't work, try:
    # python run.py
    ```

    The application will typically run on `http://127.0.0.1:5000/`.

## Machine Learning Model

The core of GrowFit is an AI model that predicts crop prices.

- **Data Source:** `crop_data.csv` (used for training).
- **Model Type:** `RandomForestRegressor` (trained using `scikit-learn`).
- **Training Details:** See `notebooks/model_training.ipynb` for the full training pipeline (coming soon).
- **Features Used:** `crop_name`, `region`, `season`, `soil_type`, `weather_condition`, `rainfall_mm`, `temperature_c`, `humidity_percent`, `fertilizer_used_kg`, `market_demand`, `supply_quantity`.
- **Target Variable:** `crop_price`.

## Website Features

- User-friendly interface for inputting crop and environmental data.
- Real-time (or near real-time) price predictions.
- Informative "About Us" page.

## Future Enhancements

- User authentication and personalized dashboards.
- Historical data visualization.
- Integration with external APIs for real-time weather/market data.
- Support for more crops and regions.
- Advanced model monitoring and retraining pipelines.

## Contribution

Feel free to fork this repository, submit pull requests, or open issues.