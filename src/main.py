import os
import argparse
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv


# Load .env file if not running in Docker
if os.getenv("DOCKER_ENV") != "true":
    load_dotenv()


comp = "radiogroup"


def parse_args():
    parser = argparse.ArgumentParser(
        description="Generate component documentation based on metadata and source code."
    )
    parser.add_argument(
        "--metadata",
        type=str,
        required=False,
        default=f"input/example/{comp}/metadata.json",
        help="Path to the metadata file (MD format)",
    )
    parser.add_argument(
        "--source",
        type=str,
        required=False,
        default=f"input/example/{comp}/sourcecode.ts",
        help="Path to the source code file",
    )
    parser.add_argument(
        "--doc_tpl",
        type=str,
        default="input/documentation-template.md",
        help="Path to the documentation template",
    )
    parser.add_argument(
        "--prompt_tpl",
        type=str,
        default="input/prompt-template.md",
        help="Path to the prompt template",
    )

    parser.add_argument(
        "--writing_style",
        type=str,
        default="input/writing-style.md",
        help="Writing style of the documentation",
    )

    parser.add_argument(
        "--output",
        type=str,
        default=f"output/documentation-{comp}.md",
        help="Output path for the generated documentation",
    )
    return parser.parse_args()


def read_file(file_path):
    """Utility to read the contents of a file."""
    try:
        with open(file_path, "r") as file:
            return file.read()
    except FileNotFoundError:
        raise FileNotFoundError(f"File not found: {file_path}")
    except Exception as e:
        raise RuntimeError(f"Error reading {file_path}: {e}")


def main():
    args = parse_args()

    # Get the OpenAI API key and model from environment variables
    openai_api_key = os.getenv("OPENAI_API_KEY")
    if not openai_api_key:
        raise ValueError("Please set the OPENAI_API_KEY environment variable.")

    openai_model = os.getenv("OPENAI_MODEL")

    # Initialize the OpenAI model
    llm = ChatOpenAI(api_key=openai_api_key, model=openai_model, temperature=0.5)

    # Read input files
    prompt_template = read_file(args.prompt_tpl)

    # Create the prompt
    prompt = PromptTemplate.from_template(prompt_template)
    chain = prompt | llm

    p = {
        "template": read_file(args.doc_tpl),
        "metadata": read_file(args.metadata),
        "sourcecode": read_file(args.source),
        "writing_style": read_file(args.writing_style),
    }

    # print(p["writing_style"])

    # Invoke the model with input data
    res = chain.invoke(p)

    # Extract and save the output
    output_content = res.content
    with open(args.output, "w") as output_file:
        output_file.write(output_content)

    print(f"Documentation generated successfully and saved to {args.output}")


if __name__ == "__main__":
    main()
