from flask_socketio import SocketIO, emit
from app.models import DirectMessage
import os

socketio = SocketIO()

if os.environ.get(FLASK_ENV) == "production":
    origins = ["http://cypher-app.onrender.com","https://cypher-app.onrender.com" ]
else:
    origins = "*"
socketio = SocketIO(cors_allowed_origins = origins)

@socketio.on("direct_messages")
def handle_direct_messages(data):
    print(data)
    if data != "User connected!":
        dms = DirectMessage(
            sender_id = data["sender_id"],
            recipient_id = data["recipient_id"],
            message = data["message"],
        )