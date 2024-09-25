Generate a comprehensive and well-structured component documentation based on the following metadata and source code. Ensure that the generated documentation follows the provided documentation template, covering all relevant sections such as the component overview, installation instructions, usage examples, customization options, API reference, events, accessibility guidelines, and best practices.

Key Requirements:
Use the metadata to extract details like the component name, description, version, author, and any specific details that are part of the metadata.
Analyze the source code to understand how the component functions, including extracting information about methods, props, event handlers, and other relevant details.
Make sure to include examples that demonstrate usage, various states (e.g., disabled, loading), and theming/customization options.
Follow the formatting and structure as described in the documentation template, ensuring the documentation is clear, concise, and user-friendly for developers and non-technical users alike.

Input Structure:
Documentation Template: The structure and sections that the documentation should adhere to.
Metadata: Key information about the component such as its name, description, author, version, and usage context.
Source Code: The actual implementation of the component, which includes prop types, methods, event handling, and logic.

Here’s the data you’ll work with:
documentation_template:
{template}

metadata:
{metadata}

sourcecode:
{sourcecode}

Expected Output:
The output should be a complete, well-organized documentation for the component based on the metadata and source code, formatted according to the documentation template. Ensure that all sections (like API reference, accessibility, and customization options) are included and thoroughly explained, with appropriate code examples where necessary.
