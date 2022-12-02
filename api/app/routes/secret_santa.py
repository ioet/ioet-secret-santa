from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, HTTPException, Depends
from app.services import calculate_secret_santa_results, get_data_by_attribute, save_register

router = APIRouter()

@router.post("/{region}")
async def calculate_results(region: str) -> dict:
    try:
        players = get_data_by_attribute(document='players', attribute="region", value=region)
        results = calculate_secret_santa_results(players)
        region = region.strip().lower()

        registry = {
            'region': region,
            'results': results,
        }

        save_register(document='secret-santa', registry=registry, key='region')
        return {'detail': " Successfully created"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f'Problem while creating the results. {str(e)}')
