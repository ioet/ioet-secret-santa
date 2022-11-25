import typing

import random

def get_players_names(players: list):
    return [player['name'] for player in players]


def calculate_secret_santa_results(players: typing.List) -> None:
    random.shuffle(players)

    secret_santa_result = list()

    for index in range(len(players)-1):
        secret_santa_result.append({'player': players[index], 'secret_santa': players[index+1]})
    secret_santa_result.append({'player': players[-1], 'secret_santa': players[0]})

    return secret_santa_result
