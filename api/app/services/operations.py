import random
from .firebase import get_data, save_register_list

def get_players_names(players: list):
    return [player['name'] for player in players]


def calculate_secret_santa_results() -> None:
    players = get_players_names(get_data('players'))
    random.shuffle(players)

    secret_santa_result = list()

    for index in range(len(players)-1):
        secret_santa_result.append({'player': players[index], 'secret_santa': players[index+1]})
    secret_santa_result.append({'player': players[-1], 'secret_santa': players[0]})

    save_register_list(document='secret-santa', registry_list=secret_santa_result, key='player')
