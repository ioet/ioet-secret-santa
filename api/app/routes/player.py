from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, Depends, Request
from datetime import datetime
from app.services import get_data, get_data_by_attribute, save_register

router = APIRouter()


@router.get('/')
async def get_player() -> list:
    try:
        return get_data(document='players')
    except Exception:
        return {'error_message': 'There are no players.'}

@router.get('/region/{region}')
async def get_players_by_region(region: str) -> list:
    try:
        return get_data_by_attribute(document='players', attribute="region", value=region)
    except Exception:
        return {'error_message': 'There are no players in that region.'}

@router.get('/get/{email}')
async def is_player_registered(email: str) -> list:
    try:
        player = get_data_by_attribute(document='players', attribute="email", value=email)
        if player:
            return {'is_player_registered': True, 'player': player[0]}

    except Exception:
        pass

    return {'is_player_registered': False}

@router.post('/')
async def create_player(req: Request) -> dict:
    try:
        body = await req.json()
        registry = {
            'region': body.get("region", "").strip().lower(),
            'wishes': body.get("wishes"),
            'name': body.get("name"),
            'email': body.get("email"),
            'picture': body.get("picture"),
            'key': body.get("email").split('@')[0].replace('.', '_').lower(),
            'timestamp': str(datetime.now())
        }

        save_register(document='players', registry=registry, key="key")
        return {'detail': "Successfully created"}
    except Exception:
        return {'error_message': f'Problem while creating the player.'}
