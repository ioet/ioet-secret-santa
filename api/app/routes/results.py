from fastapi import APIRouter, HTTPException
from app.services import get_data, get_data_by_name


router = APIRouter()


@router.get("/")
async def get_results() -> dict:
    try:
        return get_data('secret-santa')
    except Exception:
        raise HTTPException(status_code=500, detail='There is no data for the results, please generate it first.')


@router.get("/{name}")
async def get_result_by_name(name: str) -> dict:
    result = get_data_by_name(document='secret-santa', name=name)
    if not result:
        raise HTTPException(status_code=500, detail=f'Name entered does not exist.')
    return result
