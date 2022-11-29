from fastapi import Depends, APIRouter, HTTPException
from aiohttp import ClientSession

from app.services.auth import get_session
from app.config import get_settings

router = APIRouter()

env_settings = get_settings()


@router.get("/authz/user-permissions")
async def get_user_permissions(http_session: ClientSession = Depends(get_session)):
    async with http_session.get(f'/authz/user-permissions/{env_settings.appName}') as response:
        if not response.status == 200:
            raise HTTPException(response.status, 'Could not validate credentials')
        return await response.json()
