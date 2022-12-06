from fastapi import Depends, Request, HTTPException
from aiohttp import ClientSession

from app.config import get_settings


env_settings = get_settings()


async def get_session(request: Request):
    async with ClientSession(env_settings.authBackendURL, cookies=request.cookies) as session:
        yield session


async def auth_with_internal_service(
        request: Request,
        http_session: ClientSession = Depends(get_session)):
    async with http_session.get(f'/authz/has-access/{env_settings.appName}/{request.method.lower()}/{request.url.path.rstrip("/").lstrip("/")}') as response: 

        result = await response.json()
        if not result.get('has_access', False):
            raise HTTPException(403, "User does not have permission")


async def validate_user_session(http_session: ClientSession = Depends(get_session)):
    url = f'/authz/user-permissions/{env_settings.appName}'
    async with http_session.get(url) as response:
        print(url)

        if not response.status == 200:
            raise HTTPException(401, "Could not validate credentials")
