
from server.database import Database
from flask_sqlalchemy import SQLAlchemy

class MessageService:

    def __init__(self, database: Database, model) -> None:
        self.database = database
        self.model = model

    def save_message(self, data: dict):
        self.database.add_instance(self.model, data=data)

    def get_messages(self):
        return self.database.get_all(self.model)
