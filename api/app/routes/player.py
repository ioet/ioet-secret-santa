from fastapi import APIRouter, HTTPException
from datetime import datetime
from app.services import get_data, save_register


router = APIRouter()


@router.get('/')
async def get_players() -> list:
    try:
        return get_data(document='players')
    except Exception:
        raise HTTPException(status_code=500, detail=f'There are no players.')


@router.post('/{player}')
async def create_player(player: str) -> dict:
    try:
        save_register(document='players', registry={'name': player, 'timestamp': str(datetime.now())}, key='name')
        return {'detail': " Successfully created"}
    except Exception:
        raise HTTPException(status_code=500, detail=f'Problem while creating the player.')
