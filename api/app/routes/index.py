from fastapi import APIRouter, Depends, HTTPException
from aiohttp import ClientSession

from app.services.auth import get_session, auth_with_internal_service
from app.config import get_settings

router = APIRouter()
env_settings = get_settings()


@router.get("/")
async def home() -> dict:
    return {'Ioet Secret-Santa backend': 'v0.1.0'}
