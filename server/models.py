from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class MessageModel(db.Model):
    __tablename__ = 'message'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200))
    email = db.Column(db.String(200))
    message = db.Column(db.Text())

    def __init__(self, data: dict):
        self.name = data["data"]["name"]
        self.email = data["data"]["email"]
        self.message = data["data"]["message"]