from fastapi import APIRouter, HTTPException, Request
from datetime import datetime
from app.services import get_data, get_data_by_attribute, save_register

router = APIRouter()


@router.get('/')
async def get_players() -> list:
    try:
        return get_data(document='players')
    except Exception:
        raise HTTPException(status_code=500, detail=f'There are no players.')

@router.get('/region/{region}')
async def get_players_by_region(region: str) -> list:
    try:
        return get_data_by_attribute(document='players', attribute="region", value=region)
    except Exception:
        raise HTTPException(status_code=500, detail=f'There are no players.')

@router.get('/get/{email}')
async def is_player_registered(email: str) -> list:
    
    try:
        player = get_data_by_attribute(document='players', attribute="email", value=email)
        if not player:
            return {'is_player_registered': False}

        return {'is_player_registered': True, 'player': player[0]}

    except Exception:
        raise HTTPException(status_code=500, detail=f'Player not found')

@router.post('/')
async def create_player(req: Request) -> dict:
    try:
        body = await req.json()
        registry = {
            'region': body.get("region", "").strip().lower(),
            'wishes': body.get("wishes"),
            'name': body.get("name"),
            'email': body.get("email"),
            'key': body.get("email").split('@')[0].replace('.', '_').lower(),
            'timestamp': str(datetime.now())
        }
        save_register(document='players', registry=registry, key="key")
        return {'detail': "Successfully created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Problem while creating the player. {str(e)}')
