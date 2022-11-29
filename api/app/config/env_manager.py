from functools import lru_cache
from pydantic import BaseSettings


class Settings(BaseSettings):
    apiKey: str
    authDomain: str
    databaseURL: str
    projectId: str
    storageBucket: str
    messagingSenderId: str
    appId: str
    measurementId: str
    appName: str

    class Config:
        env_file = './.env'


@lru_cache()
def get_settings():
    return Settings()
