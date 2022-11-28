from fastapi import FastAPI
from mangum import Mangum
from app.events import register_routers

app = FastAPI(title='IOET Secret-Santa backend')

@app.on_event('startup')
async def startup_event() -> None:
    register_routers(app, 'app.routes')

handler = Mangum(app)
