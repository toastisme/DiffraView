import asyncio
import websockets
import json
from algorithm_types import AlgorithmType

from open_file_manager import OpenFileManager

async def handler(websocket):
    while True:
        message = await websocket.recv()
        content = json.loads(message)
        if "command" in content:

            if content["command"] == "dials.import":
                file_manager.add_active_file(content["filename"], content["fileContent"])
                log = file_manager.run(AlgorithmType.dials_import)
                print("log", log)
                await websocket.send(json.dumps({"command": content["command"], "log": log}))

file_manager = OpenFileManager()
start_server = websockets.serve(handler, "127.0.0.1", 8888, max_size=100 * 1024 * 1024)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()