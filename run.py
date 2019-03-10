from flask import  Flask, send_file, request
from subprocess import check_output

app = Flask(__name__)

@app.route('/api/v1/get_rabbit')
def get_rabbit():
	with open ('./get_rabbitmq.sh') as script:
		return (script.read())

@app.route('/api/v1/get_mongo')
def get_mongo():
	with open ('./get_mongo.sh') as script:
		return (script.read())

@app.route('/api/v1/test_mongo')
def test_mongo():
	host=request.args.get('host')
	port=request.args.get('port')
	if (host is None or port is None):
		return('Check arguments')
	else:
		res=check_output(['sh', './test_mongo.sh', host, port])
		return(res)

app.run(host='0.0.0.0')
