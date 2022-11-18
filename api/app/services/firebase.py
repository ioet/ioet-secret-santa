import pyrebase
from app.config import get_settings


env_settings = get_settings()
firebase_config = dict(env_settings)
firebase = pyrebase.initialize_app(config=firebase_config)
database = firebase.database()


def get_data(document: str) -> list:
    data = database.child(document).get()
    data = list(dict(data.val()).values())

    return data

def get_data_by_name(document: str, name: str) -> dict:
    data = database.child(document).child(name).get()

    return data.val()

def save_register(document: str, registry: dict, key: str) -> None:
    database.child(document).child(registry[key]).set(registry)

def save_register_list(document: str, registry_list: list, key: str) -> None:
    for registry in registry_list:
        database.child(document).child(registry[key]).set(registry)
