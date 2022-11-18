from fastapi import APIRouter, HTTPException
from app.services import calculate_secret_santa_results


router = APIRouter()


@router.post("/")
async def calculate_results() -> dict:
    try:
        calculate_secret_santa_results(),
        return {'detail': " Successfully created"}
    except Exception:
        raise HTTPException(status_code=500, detail=f'Problem while creating the results.')
