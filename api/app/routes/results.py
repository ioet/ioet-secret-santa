from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, Depends
from app.services import get_data, get_data_by_id, get_data_by_region

router = APIRouter()


@router.get("/")
async def get_results(_=Depends(auth_with_internal_service)) -> dict:
    try:
        return get_data('secret-santa')
    except Exception:
        return {'error_message': 'There is no data for the results, please generate it first.'}

@router.get("/region/{region}")
async def get_result_by_region(region: str, _=Depends(auth_with_internal_service)) -> dict:
    result = get_data_by_region(document='secret-santa', region=region)
    if result:
        return result
    return {'error_message': 'Region entered does not exist.'}


@router.get("/id/{id}")
async def get_result_by_id(id: str) -> dict:
    result = get_data_by_id(document='secret-santa', id=id)
    if result:
        return result
    return {'error_message': 'id entered does not exist.'}
