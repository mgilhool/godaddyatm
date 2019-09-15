from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(
    app, resources={r"/*": {"origins": "*"}}
)  # Needed to prevent blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Error
api = Api(app)

# atmDatabase is an array of dicts, that takes the place of a formal dB, since there are only 4 accounts
# right now, the only method needed is get, so the rest are stubbed out
# flask-restful spins up the sever on http://127.0.0.1:5000
# an example of a get call:
# http://127.0.0.1:5000/atm/31038
# returns {"accountnumber": 31038, "balance": -51.22} and a 200

atmDatabase = [
    {"accountnumber": 23416, "balance": 2051.52},
    {"accountnumber": 82352, "balance": -124.44},
    {"accountnumber": 65275, "balance": 3.55},
    {"accountnumber": 31038, "balance": -51.22}
]



class Atm(Resource):
    def get(self, accountnumber):
        for account in atmDatabase:
            if accountnumber == account["accountnumber"]:
                result = {}
                result.update(account)
                #print(result)
                return result, 200
                # return jsonify(results=accout), 200
        return "Account not found", 404


# post method if needed later
#    def post(self, accountnumber):
#        parser = reqparse.RequestParser()
#        parser.add_argument("balance")
#        args = parser.parse_args()
#
#        for account in atmDatabase:
#            if(accountnumber == account["accountnumber"]):
#                return "Acount number {} already exists".format(accountnumber), 400

#        account = {"accountnumber": accountnumber, "balance": args["balance"]}
#        atmDatabase.append(account)
#        return account, 201

# put method, can do later if time
# def put(self, accountnumber):

# delete method can do later if time
# def delete(self, accountnumber):


# test = Atm()
# print test.get(23416)
# print test.get(31038)

api.add_resource(Atm, "/atm/<int:accountnumber>")
app.run(debug=True)  # if you need debugging
# app.run()
