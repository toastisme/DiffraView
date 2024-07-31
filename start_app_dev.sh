#!/bin/bash

source /home/$USER/dials/conda_base/etc/profile.d/conda.sh
conda activate /home/$USER/dials/conda_base

# Navigate to the directory containing your server script
cd server

# Start the Python server in the background
python server.py &

# Navigate to the directory containing your React client
cd ../client

# Start the React client
npm run dev

# Wait for the Python server process to finish
wait
