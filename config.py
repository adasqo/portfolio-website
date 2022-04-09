import os

user = os.environ['POSTGRES_USER']
password = os.environ['POSTGRES_PASSWORD']
database_host = os.environ['POSTGRES_HOST']
database = os.environ['POSTGRES_DB']
database_port = os.environ['POSTGRES_PORT']

DATABASE_CONNECTION_URI = f'postgresql://{user}:{password}@{database_host}:{database_port}/{database}'