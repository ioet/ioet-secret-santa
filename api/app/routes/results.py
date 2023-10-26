from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, Depends
from app.services import get_data, get_data_by_email, get_data_by_region

router = APIRouter()


@router.get("/")
async def get_results() -> dict:
    try:
        return get_data('secret-santa')
    except Exception:
        return {'error_message': 'There is no data for the results, please generate it first.'}

@router.get("/region/{region}")
async def get_result_by_region(region: str) -> dict:
    result = get_data_by_region(document='secret-santa', region=region)
    if result:
        return result
    return {'error_message': 'Region entered does not exist.'}


@router.get("/email/{email}")
async def get_result_by_email(email: str) -> dict:
    result = get_data_by_email(document='secret-santa', email=email)
    if result:
        return result
    return {'error_message': 'Email entered does not exist.'}
