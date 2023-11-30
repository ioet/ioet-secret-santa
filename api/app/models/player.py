from dataclasses import dataclass, field
from typing import List, Union
from uuid import uuid4 as uuid

@dataclass
class Player:
    id: uuid = field(default_factory=uuid)
    name: Union[str, None] = field(default_factory=None)
    email: Union[str, None] = field(default_factory=None)
    region: Union[str, None] = field(default_factory=None)
    picture: Union[str, None] = field(default_factory=None)
    wishes: List[str] = field(default_factory=[])
    
    def to_json(self) -> dict:
        return {
            'id': str(self.id),
            'name': self.name,
            'email': self.email,
            'region': self.region,
            'picture': self.picture,
            'wishes': self.wishes
        }

    @staticmethod
    def create(req_player: dict) -> Union['Player', None]:
        try:
            return Player(
                id=req_player.get("id"),
                name=req_player.get("name"),
                email=req_player.get("email"),
                region=req_player.get("region").strip().lower(),
                picture=req_player.get("picture"),
                wishes=req_player.get("wishes")
            )
        except Exception:
            return None
