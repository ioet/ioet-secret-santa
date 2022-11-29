from fastapi import APIRouter, Depends, HTTPException
from aiohttp import ClientSession

from app.services.auth import get_session, auth_with_internal_service
from app.config import get_settings

router = APIRouter()
env_settings = get_settings()


@router.get("/")
async def home() -> dict:
    return {'Ioet Secret-Santa backend': 'v0.1.0'}

# @router.get("/health_check", status_code=200)
# async def health_check(_=Depends(auth_with_internal_service)) -> dict:
#     return {"message": "SecretSanta backend is working properly"}
