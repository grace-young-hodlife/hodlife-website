#!/bin/bash
# Simple server launcher script for HODLife website
# This script starts a local web server to serve the website

echo "Starting HODLife website server..."
echo "=================================="
echo ""

# Check which Python version is available
if command -v python3 &> /dev/null; then
    echo "Using Python 3..."
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Using Python 2..."
    python -m SimpleHTTPServer 8000
else
    echo "Error: Python is not installed. Please install Python 3 or Python 2."
    echo ""
    echo "Alternatively, you can open index.html directly in your browser."
    exit 1
fi
