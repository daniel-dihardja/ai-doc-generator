type SelectSize = "small" | "medium" | "large";
type SelectVariant = "default" | "outline" | "filled";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  /**
   * List of options to display in the dropdown.
   */
  options: SelectOption[];

  /**
   * Callback function triggered when an option is selected.
   */
  onChange?: (selectedValue: string) => void;

  /**
   * Whether the select is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the select is in a loading state.
   */
  loading?: boolean;

  /**
   * Placeholder text for the select.
   */
  placeholder?: string;

  /**
   * Size of the select: 'small', 'medium', 'large'.
   */
  size?: SelectSize;

  /**
   * Variant of the select: 'default', 'outline', 'filled'.
   */
  variant?: SelectVariant;
}

export class Select {
  private element: HTMLSelectElement;

  constructor(private props: SelectProps) {
    // Create the select element
    this.element = document.createElement("select");

    // Set the initial styles and properties
    this.init();
  }

  private init() {
    // Clear existing options
    this.element.innerHTML = "";

    // Add placeholder option if provided
    if (this.props.placeholder) {
      const placeholderOption = document.createElement("option");
      placeholderOption.text = this.props.placeholder;
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      this.element.add(placeholderOption);
    }

    // Add options to the select
    this.props.options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.text = option.label;
      this.element.add(optionElement);
    });

    // Apply disabled state
    this.element.disabled = !!this.props.disabled || !!this.props.loading;

    // Add size and variant classes
    this.element.className = `select ${this.props.size || "medium"} ${
      this.props.variant || "default"
    }`;

    // Bind the change event if provided
    if (this.props.onChange && !this.props.disabled && !this.props.loading) {
      this.element.addEventListener("change", () => {
        this.props.onChange!(this.element.value);
      });
    }

    // Apply styles
    this.applyStyles();
  }

  // A method to update the select's properties dynamically
  public updateProps(newProps: Partial<SelectProps>) {
    this.props = { ...this.props, ...newProps };
    this.init(); // Reinitialize the select with the updated properties
  }

  // Append the select to a target element in the DOM
  public render(target: HTMLElement) {
    target.appendChild(this.element);
  }

  // Internal method to apply basic styles
  private applyStyles() {
    this.element.style.padding = this.getSizePadding();
    this.element.style.fontSize = this.getFontSize();
    this.element.style.cursor =
      this.props.disabled || this.props.loading ? "not-allowed" : "pointer";

    // Style based on variant
    const variantStyles = {
      default: {
        backgroundColor: "#ffffff",
        border: "1px solid #ced4da",
      },
      outline: {
        backgroundColor: "#ffffff",
        border: "2px solid #007bff",
      },
      filled: {
        backgroundColor: "#007bff",
        border: "none",
        color: "#ffffff",
      },
    };

    const styles = variantStyles[this.props.variant || "default"];
    this.element.style.backgroundColor = styles.backgroundColor;
    this.element.style.border = styles.border;
  }

  // Get appropriate padding based on size
  private getSizePadding(): string {
    switch (this.props.size) {
      case "small":
        return "4px 8px";
      case "large":
        return "10px 20px";
      default:
        return "6px 12px";
    }
  }

  // Get appropriate font size based on size
  private getFontSize(): string {
    switch (this.props.size) {
      case "small":
        return "12px";
      case "large":
        return "18px";
      default:
        return "14px";
    }
  }
}
