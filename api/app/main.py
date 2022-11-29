from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
from fastapi.middleware.cors import CORSMiddleware
from app.events import register_routers

app = FastAPI(title='IOET Secret-Santa backend')

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
async def startup_event() -> None:
    register_routers(app, 'app.routes')

handler = Mangum(app)
