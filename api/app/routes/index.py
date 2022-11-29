from fastapi import APIRouter, Depends, HTTPException
from aiohttp import ClientSession

from app.services.auth import get_session, auth_with_internal_service
from app.config import get_settings

router = APIRouter()
env_settings = get_settings()


@router.get("/")
async def home() -> dict:
    return {'Ioet Secret-Santa backend': 'v0.1.0'}


@router.get("/api/authz/user-permissions")
async def get_user_permissions(http_session: ClientSession = Depends(get_session)):
    async with http_session.get(f'/authz/user-permissions/{env_settings.appName}') as response:
        if response.status != 200:
            raise HTTPException(response.status, 'Could not validate credentials')
        return await response.json()



@router.get("/health_check", status_code=200)
async def health_check(_=Depends(auth_with_internal_service)) -> dict:
    return {"message": "SecretSanta backend is working properly"}
