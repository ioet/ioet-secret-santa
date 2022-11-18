import inspect
from importlib import import_module

from fastapi import APIRouter, FastAPI


def register_routers(app: FastAPI, routers_path: str) -> None:
    router_module = import_module(routers_path)
    routers = inspect.getmembers(router_module, lambda member: isinstance(member, APIRouter))
    for name, router in routers:
        prefix = '' if name == 'index' else f'/{name.replace("_", "-")}'
        app.include_router(router, tags=[name], prefix=prefix)
