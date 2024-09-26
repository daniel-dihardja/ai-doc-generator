# AI Component Documentation Generator

A CLI application that automatically generates comprehensive component documentation using your `metadata`, `source code`, and a customizable `documentation template`. The app also allows you to define a specific `writing style`, making it easy to tailor the documentation to various audiences and ensure consistency and clarity.

## 🚀 Features

- **Dockerized CLI**: Runs inside a `Docker` container for easy setup.
- **Customizable**: Supports user-defined prompt, documentation templates, and writing styles.
- **Auto-Parsing**: Extracts details from metadata and source code for comprehensive documentation.
- **Markdown Output**: Generates documentation in markdown for easy integration.

## 📁 Input Data

All necessary input files, including the prompt template, documentation template, metadata, source code, and writing style instructions, are stored in the `input` folder. Modify these files to customize the generated documentation to your preferences.

## 📄 Example Output

Check out an example of the generated documentation [here](https://github.com/daniel-dihardja/ai-doc-generator/blob/master/output/documentation.md).

## 🔧 Usage

To generate documentation, you can use the `docker run` command or `docker-compose` for a streamlined setup:

### Using Docker

```shell
docker run --rm \
    -e OPENAI_API_KEY=your-openai-api-key-here \
    -e OPENAI_MODEL=gpt-3.5-turbo-0125 \
    -v $(pwd)/input:/app/input \
    -v $(pwd)/output:/app/output \
    ai-doc-gen \
    --metadata input/example/button/metadata.json \
    --source input/example/button/sourcecode.ts \
    --prompt_tpl input/prompt-template.md \
    --doc_tpl input/documentation-template.md \
    --writing_style input/writing-style.md \
    --output output/documentation.md
```

### Using Docker Compose

If you prefer using `docker-compose`, simply run:

```
docker-compose run --rm ai-doc-gen

```

Make sure to adjust the `docker-compose.yml` file as needed, such as setting environment variables (`OPENAI_API_KEY`, `OPENAI_MODEL`) and modifying the volume paths for your input and output files.

Both methods will generate the documentation using the specified input files and save the output in the `output` folder. Customize the `input` paths and `environment variables` to fit your specific use case.
