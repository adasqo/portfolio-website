from flask import Flask, jsonify, render_template, request

import config
from server.database import Database
from server.service import MessageService
from server.models import MessageModel
from server.models import db

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = config.DATABASE_CONNECTION_URI
app.app_context().push()
db.init_app(app)
db.create_all()

service = MessageService(Database(db), MessageModel)

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/api/v1/saveMessage", methods=["POST"])
def save_message():
    if request.method != "POST":
        return jsonify("Bad method type, POST expected.")
    data = request.json
    service.save_message(data)
    return jsonify("Success")

@app.route("/api/v1/getMessages", methods=["GET"])
def get_message():
    messages = service.get_messages()
    messages = [{"name": mess.name, "email": mess.email, "message": mess.message } for mess in messages]
    return jsonify(messages)

if __name__ == "__main__":
    app.run()