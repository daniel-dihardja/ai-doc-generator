# Use the official Python 3.11 base image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV DOCKER_ENV=true

# Set working directory
WORKDIR /app

# Copy requirements file if exists
COPY requirements.txt /app/requirements.txt

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the source code into the container
COPY . /app

# Entry point for the container
ENTRYPOINT ["python", "main.py"]
