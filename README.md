# AI Component Documentation Generator

A Docker CLI app that generates component documentation using provided **metadata**, **source code**, and a **documentation template**. Easily customizable to suit various documentation needs.

## 🚀 Features

- **Dockerized CLI**: Runs inside a Docker container for easy setup.
- **Customizable**: Supports user-defined prompt and documentation templates.
- **Auto-Parsing**: Extracts details from metadata and source code for comprehensive documentation.
- **Markdown Output**: Generates documentation in markdown for easy integration.

## 🔧 Usage

```shell
docker run --rm \
    -e OPENAI_API_KEY=your-openai-api-key-here \
    -e OPENAI_MODEL=gpt-4 \
    -v $(pwd)/input:/app/input \
    -v $(pwd)/output:/app/output \
    ai-doc-gen \
    --metadata input/metadata.txt \
    --source input/component-source.ts \
    --template input/documentation-template.md \
    --output output/documentation.md
```

## 📄 Example Output

Check out an example of the generated documentation [here](https://github.com/daniel-dihardja/ai-doc-generator/blob/master/output/documentation.md).
