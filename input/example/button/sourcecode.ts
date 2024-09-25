import React from "react";
import PropTypes from "prop-types";

// A simple Button component
const Button = ({ text, onClick, disabled, loading, color, size }) => {
  // Handle button click
  const handleClick = (event) => {
    if (!disabled && !loading) {
      onClick(event);
    }
  };

  // Define the button styles based on props
  const buttonStyles = {
    backgroundColor: disabled ? "#ccc" : color || "#007BFF",
    color: disabled ? "#666" : "#fff",
    fontSize: size === "large" ? "18px" : size === "small" ? "12px" : "14px",
    padding:
      size === "large"
        ? "12px 24px"
        : size === "small"
        ? "6px 12px"
        : "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: disabled || loading ? "not-allowed" : "pointer",
    display: "inline-block",
    position: "relative",
  };

  // Spinner to show when loading
  const spinner = (
    <span
      style={{
        width: "16px",
        height: "16px",
        border: "2px solid #f3f3f3",
        borderTop: "2px solid #3498db",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginRight: "8px",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    />
  );

  return (
    <button onClick={handleClick} style={buttonStyles} disabled={disabled}>
      {loading ? spinner : null}
      {loading ? "Loading..." : text}
    </button>
  );
};

// Prop types for the Button component
Button.propTypes = {
  text: PropTypes.string.isRequired, // Button text
  onClick: PropTypes.func, // Click event handler
  disabled: PropTypes.bool, // Whether the button is disabled
  loading: PropTypes.bool, // Whether the button shows a loading state
  color: PropTypes.string, // Button background color
  size: PropTypes.oneOf(["small", "medium", "large"]), // Button size
};

// Default props
Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  loading: false,
  color: "#007BFF",
  size: "medium",
};

export default Button;
