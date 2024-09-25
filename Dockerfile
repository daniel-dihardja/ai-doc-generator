# Use the official Python 3.11 image
FROM python:3.11-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the input directory and the Python script
COPY input /app/input
COPY src/main.py /app

# Create output directory
RUN mkdir -p /app/output

# Command to run the Python script
CMD ["python", "main.py"]
