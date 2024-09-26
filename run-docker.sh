#!/bin/bash

# Help message
if [[ $1 == "--help" || $1 == "-h" ]]; then
  echo "Usage: ./run-docker.sh [OPENAI_API_KEY] [OPENAI_MODEL] [METADATA] [SOURCE] [PROMPT_TEMPLATE] [DOC_TEMPLATE] [WRITING_STYLE] [OUTPUT]"
  echo ""
  echo "Runs the Docker command to generate component documentation with optional parameter overrides."
  echo ""
  echo "Arguments:"
  echo "  OPENAI_API_KEY       (Optional) Your OpenAI API key. Default: your-openai-api-key-here"
  echo "  OPENAI_MODEL         (Optional) The OpenAI model to use. Default: gpt-3.5-turbo-0125"
  echo "  METADATA             (Optional) Path to the metadata file. Default: input/example/button/metadata.json"
  echo "  SOURCE               (Optional) Path to the source code file. Default: input/example/button/sourcecode.ts"
  echo "  PROMPT_TEMPLATE      (Optional) Path to the prompt template file. Default: input/prompt-template.md"
  echo "  DOC_TEMPLATE         (Optional) Path to the documentation template file. Default: input/documentation-template.md"
  echo "  WRITING_STYLE        (Optional) Path to the writing style file. Default: input/writing-style.md"
  echo "  OUTPUT               (Optional) Path to save the generated documentation. Default: output/documentation.md"
  echo ""
  echo "Example:"
  echo "  ./run-docker.sh my-api-key gpt-4 input/new-metadata.json input/new-sourcecode.ts"
  exit 0
fi

# Default values
OPENAI_API_KEY_DEFAULT="your-openai-api-key-here"
OPENAI_MODEL_DEFAULT="gpt-3.5-turbo-0125"
METADATA_DEFAULT="input/example/button/metadata.json"
SOURCE_DEFAULT="input/example/button/sourcecode.ts"
PROMPT_TEMPLATE_DEFAULT="input/prompt-template.md"
DOC_TEMPLATE_DEFAULT="input/documentation-template.md"
WRITING_STYLE_DEFAULT="input/writing-style.md"
OUTPUT_DEFAULT="output/documentation.md"

# Override with command-line arguments if provided
OPENAI_API_KEY=${1:-$OPENAI_API_KEY_DEFAULT}
OPENAI_MODEL=${2:-$OPENAI_MODEL_DEFAULT}
METADATA=${3:-$METADATA_DEFAULT}
SOURCE=${4:-$SOURCE_DEFAULT}
PROMPT_TEMPLATE=${5:-$PROMPT_TEMPLATE_DEFAULT}
DOC_TEMPLATE=${6:-$DOC_TEMPLATE_DEFAULT}
WRITING_STYLE=${7:-$WRITING_STYLE_DEFAULT}
OUTPUT=${8:-$OUTPUT_DEFAULT}

# Run the Docker command
docker run --rm \
    -e OPENAI_API_KEY=$OPENAI_API_KEY \
    -e OPENAI_MODEL=$OPENAI_MODEL \
    -v $(pwd)/input:/app/input \
    -v $(pwd)/output:/app/output \
    ai-doc-gen \
    --metadata $METADATA \
    --source $SOURCE \
    --prompt_tpl $PROMPT_TEMPLATE \
    --doc_tpl $DOC_TEMPLATE \
    --writing_style $WRITING_STYLE \
    --output $OUTPUT
