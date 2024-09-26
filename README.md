# AI Component Documentation Generator

A CLI application that automatically generates comprehensive component documentation using your metadata, source code, and a customizable documentation template. The app also allows you to define a specific writing style, making it easy to tailor the documentation to various audiences and ensure consistency and clarity.

## 🚀 Features

- **Dockerized CLI**: Runs inside a Docker container for easy setup.
- **Customizable**: Supports user-defined prompt, documentation templates, and writing styles.
- **Auto-Parsing**: Extracts details from metadata and source code for comprehensive documentation.
- **Markdown Output**: Generates documentation in markdown for easy integration.

## 📁 Input Data

All necessary input files, including the prompt template, documentation template, metadata, source code, and writing style instructions, are stored in the `input` folder. Modify these files to customize the generated documentation to your preferences.

## 📄 Example Output

Check out an example of the generated documentation [here](https://github.com/daniel-dihardja/ai-doc-generator/blob/master/output/documentation.md).

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
