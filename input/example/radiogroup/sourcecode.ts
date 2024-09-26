type RadioSize = "small" | "medium" | "large";
type RadioVariant = "default" | "outline" | "filled";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  /**
   * List of radio options to display in the group.
   */
  options: RadioOption[];

  /**
   * Callback function triggered when a radio option is selected.
   */
  onChange?: (selectedValue: string) => void;

  /**
   * Currently selected value.
   */
  selectedValue?: string;

  /**
   * Whether the radio group is disabled.
   */
  disabled?: boolean;

  /**
   * Size of the radio buttons: 'small', 'medium', 'large'.
   */
  size?: RadioSize;

  /**
   * Variant of the radio buttons: 'default', 'outline', 'filled'.
   */
  variant?: RadioVariant;
}

export class RadioGroup {
  private element: HTMLDivElement;

  constructor(private props: RadioGroupProps) {
    // Create the container for the radio buttons
    this.element = document.createElement("div");

    // Set the initial styles and properties
    this.init();
  }

  private init() {
    // Clear existing radio buttons
    this.element.innerHTML = "";

    // Add radio buttons to the group
    this.props.options.forEach((option) => {
      const radioLabel = document.createElement("label");
      radioLabel.className = `radio ${this.props.size || "medium"} ${
        this.props.variant || "default"
      }`;

      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.value = option.value;
      radioInput.name = "radiogroup";
      radioInput.disabled = !!this.props.disabled;
      radioInput.checked = this.props.selectedValue === option.value;

      // Bind the change event if provided
      if (this.props.onChange && !this.props.disabled) {
        radioInput.addEventListener("change", () => {
          this.props.onChange!(option.value);
        });
      }

      const radioText = document.createElement("span");
      radioText.innerText = option.label;

      // Append the input and label text
      radioLabel.appendChild(radioInput);
      radioLabel.appendChild(radioText);
      this.element.appendChild(radioLabel);
    });

    // Apply styles
    this.applyStyles();
  }

  // A method to update the radio group's properties dynamically
  public updateProps(newProps: Partial<RadioGroupProps>) {
    this.props = { ...this.props, ...newProps };
    this.init(); // Reinitialize the group with the updated properties
  }

  // Append the radio group to a target element in the DOM
  public render(target: HTMLElement) {
    target.appendChild(this.element);
  }

  // Internal method to apply basic styles
  private applyStyles() {
    this.element.style.display = "flex";
    this.element.style.flexDirection =
      this.props.size === "large" ? "row" : "column";

    // Apply styles based on the variant
    const variantStyles = {
      default: {
        backgroundColor: "#ffffff",
        borderColor: "#ced4da",
      },
      outline: {
        backgroundColor: "#ffffff",
        borderColor: "#007bff",
      },
      filled: {
        backgroundColor: "#007bff",
        borderColor: "none",
      },
    };

    const styles = variantStyles[this.props.variant || "default"];
    this.element.style.backgroundColor = styles.backgroundColor;
    this.element.style.border = styles.borderColor
      ? `1px solid ${styles.borderColor}`
      : "none";
  }
}
