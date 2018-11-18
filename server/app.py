from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from service import *

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/question')
@cross_origin()
def getNewQuestion():
	mode = request.args.get('mode')
	#result = service.getMode(mode)
	result = getResponseObject(mode)
	return result

if __name__ == '__main__':
	app.run(port=8000)