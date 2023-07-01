from flask import Blueprint
from app.models import Channel
from flask_login import current_user

channel_routes = Blueprint('channels', __name__)
@channel_routes.route('/')
def get_channels():
    channels = Channel.query.all()
    print("hello world")
    print(channels)
    if len(channels) == 0:
        return {}
    return [ {
        'id': channel.id,
        'name': channel.name,
        'private': channel.private,
        'team_id': channel.team_id,
        "description": channel.description
        }
        for channel in channels]

@channel_routes.route('/<int:id>')
def get_channel_by_id(id):
    channel = Channel.query.get(id)
    if channel is None:
        return {"message": "Channel not found"}
    return {
        'id': channel.id,
        'name': channel.name,
        'private': channel.private,
        'team_id': channel.team_id,
        "description": channel.description
        }
