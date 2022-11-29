from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, HTTPException, Depends
from app.services import get_data, get_data_by_email, get_data_by_region

router = APIRouter()


@router.get("/")
async def get_results( _=Depends(auth_with_internal_service)) -> dict:
    try:
        return get_data('secret-santa')
    except Exception:
        raise HTTPException(status_code=500, detail='There is no data for the results, please generate it first.')

@router.get("/region/{region}")
async def get_result_by_region(region: str,  _=Depends(auth_with_internal_service)) -> dict:
    result = get_data_by_region(document='secret-santa', region=region)
    if not result:
        raise HTTPException(status_code=500, detail=f'region entered does not exist.')
    return result


@router.get("/email/{email}")
async def get_result_by_email(email: str,  _=Depends(auth_with_internal_service)) -> dict:
    result = get_data_by_email(document='secret-santa', email=email)
    if not result:
        raise HTTPException(status_code=500, detail=f'Name entered does not exist.')
    return result
