from fastapi import Depends, APIRouter, HTTPException
from aiohttp import ClientSession

from app.services.auth import get_session, auth_with_internal_service

router = APIRouter()


@router.get("/api/authz/user-permissions")
async def get_user_permissions(http_session: ClientSession = Depends(get_session)):
    async with http_session.get('/authz/user-permissions/SecretSanta') as response:
        if not response.status == 200:
            raise HTTPException(response.status, 'Could not validate credentials')
        return await response.json()



@router.get("/health_check", status_code=200)
async def health_check(_=Depends(auth_with_internal_service)) -> dict:
    return {"message": "Performance backend is working properly"}