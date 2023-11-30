from fastapi import Depends, APIRouter
from aiohttp import ClientSession
from uuid import uuid4 as uuid
from app.services.firebase import get_player_by_email

from app.services.auth import get_session
from app.config import get_settings

router = APIRouter()

env_settings = get_settings()


@router.get("/authz/user-permissions")
async def get_user_permissions(http_session: ClientSession = Depends(get_session)):
    async with http_session.get(f'/authz/user-permissions/{env_settings.appName}') as response:
        if response.status == 200:
            user = await response.json()

            try:
                db_user = get_player_by_email(document='players', email=user.get('email'))
            except Exception:
                db_user = {
                    'id': str(uuid()),
                }

            response =  {
                **user,
                "id": db_user.get('id')
            }

            return response
        return {'error_message': 'Could not validate credentials'}
