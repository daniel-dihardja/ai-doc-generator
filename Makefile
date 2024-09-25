# Variables
DOCKER_IMAGE_NAME = ai-doc-gen
DOCKER_CONTAINER_NAME = dg-container
PYTHON_VERSION = 3.11
OUTPUT_DIR = $(shell pwd)/output

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE_NAME) .

# Run the Docker container and mount the output directory
run:
	docker run --name $(DOCKER_CONTAINER_NAME) -v $(OUTPUT_DIR):/app/output $(DOCKER_IMAGE_NAME)

# Clean up (remove) the Docker container
clean-container:
	docker rm $(DOCKER_CONTAINER_NAME) || true

# Clean up (remove) the Docker image
clean-image:
	docker rmi $(DOCKER_IMAGE_NAME) || true

# Full cleanup (both container and image)
clean: clean-container clean-image

# Rebuild the Docker image (clean and build again)
rebuild: clean buildmake

i:
	pip install -r requirements.txt

