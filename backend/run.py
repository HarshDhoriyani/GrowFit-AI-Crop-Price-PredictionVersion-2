from app import create_app
import os

app = create_app()

if __name__ == '__main__':
    # Set FLASK_ENV to 'development' for local development
    # In production, this should be 'production' and debug=False
    os.environ['FLASK_ENV'] = 'development'
    app.run(debug=True, host='0.0.0.0') # host='0.0.0.0' to be accessible externally if needed