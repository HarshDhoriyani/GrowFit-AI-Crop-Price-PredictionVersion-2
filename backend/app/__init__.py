# backend/app/__init__.py
from flask import Flask, render_template
from flask_cors import CORS # Import CORS
import os

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')

    CORS(app) # Enable CORS for your app

    # Register blueprints
    from app.routes.main import main_bp
    app.register_blueprint(main_bp)

    # Basic error handling
    @app.errorhandler(404)
    def page_not_found(error):
        # For API, you might return JSON, for a templated error page, keep render_template
        return render_template('404.html'), 404

    @app.errorhandler(500)
    def internal_server_error(error):
        # For API, you might return JSON, for a templated error page, keep render_template
        return render_template('500.html'), 500

    return app