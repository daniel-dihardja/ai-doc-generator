# AI Component Documentation Generator

This project provides a Docker CLI app that automatically generates component documentation based on provided **metadata**, **source code**, and a **documentation template**. The generated documentation follows a predefined template, but the location of the prompt template and documentation template can be customized to meet specific needs.

## 🚀 Features

- Dockerized CLI: The app runs entirely inside a Docker container
- Customizable Documentation: The location of the prompt and documentation templates can be easily rewritten to use your own templates.
- Metadata and Source Code Parsing: Automatically generates comprehensive documentation by extracting details from component metadata and source code.
- Markdown Output: Documentation is generated in markdown format, making it easy to integrate with other documentation systems or static site generators.

## 🔧 Usage

```shell
docker run --rm \
    -e OPENAI_API_KEY=your-openai-api-key-here \
    -e OPENAI_MODEL=gpt-4o \
    -v $(pwd)/input:/app/input \
    -v $(pwd)/output:/app/output \
    ai-doc-gen \
    --metadata input/metadata.txt \
    --source input/component-source.ts \
    --template input/documentation-template.md \
    --output output/documentation.md

```
