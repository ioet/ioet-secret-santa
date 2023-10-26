from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
from app.config.env_manager import get_settings
from app.events import register_routers

app = FastAPI()
settings = get_settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.frontendURL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event('startup')
async def startup_event() -> None:
    register_routers(app, 'app.routes')

handler = Mangum(app)
