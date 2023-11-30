from app.services.auth import auth_with_internal_service
from fastapi import APIRouter, Depends
from app.services import calculate_secret_santa_results, get_data_by_attribute, save_register

router = APIRouter()

@router.post("/{region}")
async def calculate_results(region: str) -> dict:
    try:
        region = region.strip().lower()
        players = get_data_by_attribute(document='players', attribute="region", value=region)
        results = calculate_secret_santa_results(players)

        registry = {
            'region': region,
            'results': results,
        }

        save_register(document='secret-santa', registry=registry, key='region')
        return {'detail': "Successfully created"}
    except Exception:
        return {'error_message': "Problem while creating the results."}
