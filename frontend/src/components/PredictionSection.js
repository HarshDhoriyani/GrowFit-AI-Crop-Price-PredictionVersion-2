   import React, { useState } from 'react';
   import { useInView } from 'react-intersection-observer';

   const PredictionSection = () => {
     const [predictionResult, setPredictionResult] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

     const { ref, inView } = useInView({
       triggerOnce: true,
       threshold: 0.1,
     });

     const handleSubmit = async (event) => {
       event.preventDefault();
       setLoading(true);
       setError(null);
       setPredictionResult(null);

       const formData = new FormData(event.target);
       const data = Object.fromEntries(formData.entries());

       // Convert numerical fields to numbers
       data.rainfall_mm = parseFloat(data.rainfall_mm);
       data.temperature_c = parseFloat(data.temperature_c);
       data.humidity_percent = parseFloat(data.humidity_percent);
       data.fertilizer_used_kg = parseFloat(data.fertilizer_used_kg);
       data.market_demand = parseFloat(data.market_demand);
       data.supply_quantity = parseFloat(data.supply_quantity);

       try {
         // IMPORTANT: Replace with your Flask backend URL
         const response = await fetch('http://127.0.0.1:5000/predict', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
         });

         if (!response.ok) {
           const errorData = await response.json();
           throw new Error(errorData.error || 'Failed to fetch prediction.');
         }

         const result = await response.json();
         if (result.prediction !== undefined && result.prediction !== null) {
           setPredictionResult(result.prediction.toFixed(2));
         } else {
           setError('Prediction result is missing or invalid.');
         }
       } catch (err) {
         console.error('Prediction error:', err);
         setError(err.message || 'An error occurred during prediction. Please try again.');
       } finally {
         setLoading(false);
       }
     };

     return (
       <section id="prediction-section" ref={ref} className={`prediction-section section-common ${inView ? 'slide-in-up' : ''}`}>
         <div className="container">
           <h2>Get Your Crop Price Prediction</h2>
           <p className="section-description">Enter the details below to receive an estimated market price for your crop.</p>
           <div className="prediction-form-container">
             <form onSubmit={handleSubmit} className="growfit-form">
               <div className="form-group">
                 <label htmlFor="crop_name"><i className="fas fa-seedling"></i> Crop Name:</label>
                 <select id="crop_name" name="crop_name" required>
                   <option value="">Select Crop</option>
                   <option value="Cotton">Cotton</option>
                   <option value="Barley">Barley</option>
                   <option value="Soybean">Soybean</option>
                   <option value="Maize">Maize</option>
                   <option value="Rice">Rice</option>
                   <option value="Wheat">Wheat</option>
                   <option value="Millet">Millet</option>
                   <option value="Sugarcane">Sugarcane</option>
                 </select>
               </div>

               <div className="form-group">
                 <label htmlFor="region"><i className="fas fa-globe-americas"></i> Region:</label>
                 <select id="region" name="region" required>
                   <option value="">Select Region</option>
                   <option value="East">East</option>
                   <option value="West">West</option>
                   <option value="Central">Central</option>
                   <option value="North">North</option>
                   <option value="South">South</option>
                 </select>
               </div>

               <div className="form-group">
                 <label htmlFor="season"><i className="fas fa-cloud-sun"></i> Season:</label>
                 <select id="season" name="season" required>
                   <option value="">Select Season</option>
                   <option value="Summer">Summer</option>
                   <option value="Spring">Spring</option>
                   <option value="Winter">Winter</option>
                   <option value="Autumn">Autumn</option>
                   <option value="Monsoon">Monsoon</option>
                 </select>
               </div>

               <div className="form-group">
                 <label htmlFor="soil_type"><i className="fas fa-flask"></i> Soil Type:</label>
                 <select id="soil_type" name="soil_type" required>
                   <option value="">Select Soil Type</option>
                   <option value="Sandy">Sandy</option>
                   <option value="Peaty">Peaty</option>
                   <option value="Clayey">Clayey</option>
                   <option value="Loamy">Loamy</option>
                   <option value="Silty">Silty</option>
                 </select>
               </div>

               <div className="form-group">
                 <label htmlFor="weather_condition"><i className="fas fa-cloud-showers-heavy"></i> Weather Condition:</label>
                 <select id="weather_condition" name="weather_condition" required>
                   <option value="">Select Weather</option>
                   <option value="Humid">Humid</option>
                   <option value="Rainy">Rainy</option>
                   <option value="Dry">Dry</option>
                   <option value="Moderate">Moderate</option>
                   <option value="Cold">Cold</option>
                 </select>
               </div>

               <div className="form-group">
                 <label htmlFor="rainfall_mm"><i className="fas fa-water"></i> Rainfall (mm):</label>
                 <input type="number" id="rainfall_mm" name="rainfall_mm" step="0.01" required />
               </div>

               <div className="form-group">
                 <label htmlFor="temperature_c"><i className="fas fa-thermometer-half"></i> Temperature (&deg;C):</label>
                 <input type="number" id="temperature_c" name="temperature_c" step="0.01" required />
               </div>

               <div className="form-group">
                 <label htmlFor="humidity_percent"><i className="fas fa-percent"></i> Humidity (%):</label>
                 <input type="number" id="humidity_percent" name="humidity_percent" step="0.01" required />
               </div>

               <div className="form-group">
                 <label htmlFor="fertilizer_used_kg"><i className="fas fa-flask"></i> Fertilizer Used (kg):</label>
                 <input type="number" id="fertilizer_used_kg" name="fertilizer_used_kg" step="0.01" required />
               </div>

               <div className="form-group">
                 <label htmlFor="market_demand"><i className="fas fa-chart-line"></i> Market Demand:</label>
                 <input type="number" id="market_demand" name="market_demand" step="0.01" required />
               </div>

               <div className="form-group">
                 <label htmlFor="supply_quantity"><i className="fas fa-truck-loading"></i> Supply Quantity:</label>
                 <input type="number" id="supply_quantity" name="supply_quantity" step="0.01" required />
               </div>

               <button type="submit" className="btn btn-success" disabled={loading}>
                 {loading ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-calculator"></i>} Get Prediction
               </button>
             </form>

             <div className="prediction-result-box">
               {loading && <p className="loading-text"><i className="fas fa-spinner fa-spin"></i> Predicting...</p>}
               {error && <p className="error-text"><i className="fas fa-exclamation-circle"></i> {error}</p>}
               {predictionResult && (
                 <>
                   <h3>Predicted Crop Price:</h3>
                   <p className="prediction-value">₹ {predictionResult}</p>
                   <p className="success-message">Prediction successful!</p>
                 </>
               )}
               {!loading && !error && !predictionResult && (
                 <p className="placeholder-text">Enter details above and click 'Get Prediction' to see the estimated crop price.</p>
               )}
             </div>
           </div>
         </div>
       </section>
     );
   };

   export default PredictionSection;
   