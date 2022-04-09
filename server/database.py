from flask_sqlalchemy import SQLAlchemy

class Database:

    def __init__(self, db: SQLAlchemy) -> None:
        self.db = db

    def get_all(self, model):
        data = model.query.all()
        return data

    def add_instance(self, model, **kwargs):
        instance = model(**kwargs)
        self.db.session.add(instance)
        self.commit_changes()

    def delete_instance(self, model, id):
        model.query.filter_by(id=id).delete()
        self.commit_changes()

    def edit_instance(self, model, id, **kwargs):
        instance = model.query.filter_by(id=id).all()[0]
        for attr, new_value in kwargs.items():
            setattr(instance, attr, new_value)
        self.commit_changes()

    def commit_changes(self):
        self.db.session.commit()