// Button.ts

type ButtonSize = "small" | "medium" | "large";
type ButtonColor = "primary" | "secondary" | "danger" | "success";

interface ButtonProps {
  /**
   * The label text displayed on the button.
   */
  label: string;

  /**
   * Callback function to be called when the button is clicked.
   */
  onClick?: () => void;

  /**
   * Whether the button is disabled.
   */
  disabled?: boolean;

  /**
   * Whether the button is in a loading state.
   */
  loading?: boolean;

  /**
   * Button size: 'small', 'medium', 'large'.
   */
  size?: ButtonSize;

  /**
   * Button color: 'primary', 'secondary', 'danger', 'success'.
   */
  color?: ButtonColor;
}

export class Button {
  private element: HTMLButtonElement;

  constructor(private props: ButtonProps) {
    // Create the button element
    this.element = document.createElement("button");

    // Set the initial styles and properties
    this.init();
  }

  private init() {
    // Set button text
    this.element.innerHTML = this.props.loading
      ? "Loading..."
      : this.props.label;

    // Apply disabled state
    this.element.disabled = !!this.props.disabled || !!this.props.loading;

    // Add size and color classes
    this.element.className = `button ${this.props.size || "medium"} ${
      this.props.color || "primary"
    }`;

    // Bind the click event if provided
    if (this.props.onClick && !this.props.disabled && !this.props.loading) {
      this.element.addEventListener("click", this.props.onClick);
    }

    // Apply styles
    this.applyStyles();
  }

  // A method to update the button's properties dynamically
  public updateProps(newProps: Partial<ButtonProps>) {
    this.props = { ...this.props, ...newProps };
    this.init(); // Reinitialize the button with the updated properties
  }

  // Append the button to a target element in the DOM
  public render(target: HTMLElement) {
    target.appendChild(this.element);
  }

  // Internal method to apply basic styles
  private applyStyles() {
    this.element.style.padding = this.getSizePadding();
    this.element.style.fontSize = this.getFontSize();
    this.element.style.cursor =
      this.props.disabled || this.props.loading ? "not-allowed" : "pointer";

    // Color mapping
    const colorMapping = {
      primary: "#007bff",
      secondary: "#6c757d",
      danger: "#dc3545",
      success: "#28a745",
    };

    this.element.style.backgroundColor =
      colorMapping[this.props.color || "primary"];
    this.element.style.color = "#ffffff"; // Set text color to white
    this.element.style.border = "none";
    this.element.style.borderRadius = "4px";
  }

  // Get appropriate padding based on size
  private getSizePadding(): string {
    switch (this.props.size) {
      case "small":
        return "6px 12px";
      case "large":
        return "12px 24px";
      default:
        return "8px 16px";
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
