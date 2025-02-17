#!/bin/bash
#
SERVER_ADDR=127.0.0.1
SERVER_PORT=50010
CLIENT_PORT=50011

kill_process_on_port() {
	PORT=$1
	PID=$(lsof -ti tcp:$PORT) # Get the process ID using the port
	if [ -n "$PID" ]; then
		echo "Process running on port $PORT with PID $PID. Killing process..."
		kill -9 $PID
		echo "Process on port $PORT has been killed."
	else
		echo "No process running on port $PORT."
	fi
}

# Check and kill any process running on SERVER_PORT
kill_process_on_port $SERVER_PORT

# Check and kill any process running on CLIENT_PORT
kill_process_on_port $CLIENT_PORT

. ~/.bashrc
source /home/$USER/dials/conda_base/etc/profile.d/conda.sh
conda activate /home/$USER/dials/conda_base

# Navigate to the directory containing your server script
cd /home/$USER/diffraview/server

# Start the Python server in the background
python server.py $SERVER_ADDR $SERVER_PORT &
sleep 2
SERVER_PID=$!

# Navigate to the directory containing your React client
cd /home/$USER/diffraview/client

# Start the React client
npm run dev &
CLIENT_PID=$!
sleep 2
npx electron .

cleanup() {
	echo "Closing client..."
	kill $CLIENT_PID
	echo "Closing server..."
	kill $SERVER_PID
}

trap cleanup EXIT

# Wait for the Python server process to finish
wait $SERVER_PID
