## 🛠 Shell Script for Running the Docker Command

This project includes a convenient shell script, `run-docker.sh`, designed to simplify running the Docker command for generating component documentation. This script allows you to override default parameters like the OpenAI API key, model, input files, and output location.

### 📋 Usage

To use the script, run:

```bash
./run-docker.sh [OPENAI_API_KEY] [OPENAI_MODEL] [METADATA] [SOURCE] [PROMPT_TEMPLATE] [DOC_TEMPLATE] [WRITING_STYLE] [OUTPUT]
```

### 📌 Parameters

- `OPENAI_API_KEY`(Required): Your OpenAI API key.
- `OPENAI_MODEL` (Optional): The OpenAI model to use. Default: `gpt-3.5-turbo-0125`.
- `METADATA` (Optional): Path to the metadata file. Default: `input/example/button/metadata.json`.
- `SOURCE` (Optional): Path to the source code file. Default: `input/example/button/sourcecode.ts`.
- `PROMPT_TEMPLATE` (Optional): Path to the prompt template file. Default: `input/prompt-template.md`.
- `DOC_TEMPLATE` (Optional): Path to the documentation template file. Default: `input/documentation-template.md`.
- `WRITING_STYLE` (Optional): Path to the writing style file. Default: `input/writing-style.md`.
- `OUTPUT` (Optional): Path to save the generated documentation. Default: `output/documentation.md`.

### ℹ️ Examples

- Running the script with default values:

  ```bash
  ./run-docker.sh
  ```

- Providing custom API key and model:

  ```bash
  ./run-docker.sh my-api-key gpt-4
  ```

- Providing custom paths for metadata and source files:

  ```bash
  ./run-docker.sh my-api-key gpt-4 input/new-metadata.json input/new-sourcecode.ts
  ```

### 🆘 Help

To see a help message, run:

```bash
./run-docker.sh --help
```

This script simplifies running the Docker command and provides flexibility for different configurations. By passing parameters to the script, you can quickly generate component documentation tailored to your specific requirements. If no parameters are provided, it will use the default values specified within the script.
