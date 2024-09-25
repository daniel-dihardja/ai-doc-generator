# Button Documentation

## 1. Component Overview

A customizable button component with support for different states (loading, disabled), colors, and sizes.

- **When to use**: The Button component is ideal for creating interactive elements like buttons in web applications.
- Optionally, include diagrams or flowcharts if needed to describe the workflow.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

- **npm**

  ```bash
  npm install button
  ```

- **yarn**

  ```bash
  yarn add button
  ```

- **pnpm**
  ```bash
  pnpm add button
  ```

Include any global dependencies if necessary.

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { Button } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <Button label="Simple Usage" onClick={handleClick} />
   ```

2. **Variants**:

   ```jsx
   <Button label="Primary" color="primary" />
   <Button label="Secondary" color="secondary" />
   ```

3. **Disabled State**:

   ```jsx
   <Button label="Disabled" disabled />
   ```

4. **Loading State**:
   ```jsx
   <Button label="Loading..." loading />
   ```

---

## 5. Customization and Theming

- You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button label="Styled Button" className="bg-blue-500 hover:bg-blue-700" />
  ```

- Learn how to extend or override default styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- |
| `label`      | `string`   | The label text displayed on the button. | - |
| `onClick`    | `() => void` | Callback function to be called when the button is clicked. | - |
| `disabled`   | `boolean`  | Whether the button is disabled. | `false` |
| `loading`    | `boolean`  | Whether the button is in a loading state. | `false` |
| `size`       | `ButtonSize` | Button size: 'small', 'medium', 'large'. | `"medium"` |
| `color`      | `ButtonColor` | Button color: 'primary', 'secondary', 'danger', 'success'. | `"primary"` |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `() => void` | Fires when the button is clicked |
| `onChange` | `(value: string) => void`     | Fired when the value changes     |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `button` is applied to this component.
- **Keyboard Navigation**: Full support for `Tab`, `Enter`, and `Space` key interactions.
- **Focus Management**: Proper focus management and visibility of focus state.
- **Screen Readers**: Provides screen reader compatibility with meaningful labels.

---

## 8. Best Practices

- Use the component with clear and meaningful labels.
- Avoid overloading the component with too many variations.
- Keep performance in mind when using with dynamic content.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success:

  ```jsx
  <Button label="Error State" color="danger" />
  ```

- Ensure that edge cases, such as empty states or long text, are handled gracefully.

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.
  ```bash
  cypress run
  ```

---