from fastapi import APIRouter


router = APIRouter()


@router.get("/")
async def home() -> dict:
    return {'Ioet Secret-Santa backend': 'v0.1.0'}
