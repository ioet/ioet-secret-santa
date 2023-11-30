from app.models.player import Player
from fastapi import APIRouter, Request
from app.services import get_data, get_data_by_attribute, save_player

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

@router.get('/get/{id}')
async def is_player_registered(id: str) -> list:
    try:
        player = get_data_by_attribute(document='players', attribute="id", value=id)
        if player:
            return {'is_player_registered': True, 'player': player[0]}

    except Exception:
        pass

    return {'is_player_registered': False}

@router.post('/')
async def create_player(req: Request) -> dict:
    try:
        raw_player = await req.json()
        player = Player.create(raw_player)
        save_player(document='players', registry=player)
        return {'detail': "Successfully created"}
    except Exception:
        return {'error_message': f'Problem while creating the player.'}
