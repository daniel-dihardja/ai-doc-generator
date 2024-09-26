# AI Component Documentation Generator

A CLI application that automatically generates comprehensive component documentation using your `metadata`, `source code`, and a customizable `documentation template`. The app leverages the `OpenAI API`, `prompt engineering`, and `LangChain` to generate high-quality documentation. It also allows you to define a specific `writing style`, making it easy to tailor the documentation to various audiences and ensure consistency and clarity.

## 🚀 Features

- **Dockerized CLI**: Runs inside a `Docker` container for easy setup.
- **Customizable**: Supports user-defined prompt, documentation templates, and writing styles.
- **Auto-Parsing**: Extracts details from metadata and source code for comprehensive documentation.
- **Markdown Output**: Generates documentation in markdown for easy integration.

## 📁 Input Data

All necessary input files, including the prompt template, documentation template, metadata, source code, and writing style instructions, are stored in the `input` folder. Modify these files to customize the generated documentation to your preferences.

## 📄 Example Output

Check out an example of the generated documentation [here](https://github.com/daniel-dihardja/ai-doc-generator/blob/master/output/).

## 🔧 Usage

To generate documentation, you can use `docker-compose` for a streamlined setup:

Simply run:

```
docker-compose run --rm ai-doc-gen

```

Make sure to adjust the `docker-compose.yml` file as needed, such as setting environment variables (`OPENAI_API_KEY`, `OPENAI_MODEL`) and modifying the volume paths for your `input` and `output` files.
