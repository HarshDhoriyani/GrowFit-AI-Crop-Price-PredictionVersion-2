from flask import Blueprint, render_template, request, jsonify, current_app
from app.services.prediction_service import get_crop_prediction
import pandas as pd # Import pandas for creating DataFrame

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json # Expecting JSON input from frontend

        # Extract features from the request data
        crop_name = data.get('crop_name')
        region = data.get('region')
        season = data.get('season')
        soil_type = data.get('soil_type')
        weather_condition = data.get('weather_condition')

        # Convert numerical inputs to float/int, handle potential errors
        try:
            rainfall_mm = float(data.get('rainfall_mm'))
            temperature_c = float(data.get('temperature_c'))
            humidity_percent = float(data.get('humidity_percent'))
            fertilizer_used_kg = float(data.get('fertilizer_used_kg'))
            market_demand = float(data.get('market_demand'))
            supply_quantity = float(data.get('supply_quantity'))
        except (ValueError, TypeError):
            return jsonify({"error": "Invalid numerical input for one or more fields."}), 400

        # Basic validation for required fields
        if not all([crop_name, region, season, soil_type, weather_condition,
                    rainfall_mm is not None, temperature_c is not None, humidity_percent is not None,
                    fertilizer_used_kg is not None, market_demand is not None, supply_quantity is not None]):
            return jsonify({"error": "Missing one or more required input fields."}), 400

        # Create a dictionary for the input features
        input_features = {
            'crop_name': crop_name,
            'region': region,
            'season': season,
            'soil_type': soil_type,
            'weather_condition': weather_condition,
            'rainfall_mm': rainfall_mm,
            'temperature_c': temperature_c,
            'humidity_percent': humidity_percent,
            'fertilizer_used_kg': fertilizer_used_kg,
            'market_demand': market_demand,
            'supply_quantity': supply_quantity
        }

        # Convert the input features into a Pandas DataFrame
        # The order of columns in this DataFrame does NOT need to match `all_feature_names`
        # because the ColumnTransformer in the pipeline will handle the correct ordering
        # and one-hot encoding based on its fit state.
        input_df = pd.DataFrame([input_features])

        prediction_result = get_crop_prediction(input_df, current_app.config['MODEL_PATH'])

        return jsonify({"prediction": prediction_result})

    except Exception as e:
        current_app.logger.error(f"Prediction error: {e}")
        return jsonify({"error": "An internal error occurred during prediction. Please try again later."}), 500

@main_bp.route('/about')
def about():
    return render_template('about.html')