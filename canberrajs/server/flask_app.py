from flask import Flask, request, jsonify
from werkzeug.http import HTTP_STATUS_CODES

app = Flask(__name__)
    
def bad_request(message):
    payload = {'error': HTTP_STATUS_CODES.get(400, 'Unknown error')}
    if message:
        payload['message'] = message
    response = jsonify(payload)
    response.status_code = 400
    return response

@app.route("/login", methods=["POST"])
def login():
    try: 
        # get username and password from request
        data = request.get_json()
        username = data["username"]
        password = data["password"]

        if username != "username" and password != "password":
            return bad_request("Username or password is not correct.")

        return jsonify({"token": ""})

    except KeyError:
        return bad_request("Username or password is not correct.")
    return bad_request("There is an internal server error.")

app.run()