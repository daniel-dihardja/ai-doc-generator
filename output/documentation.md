# Button Documentation

## 1. Component Overview

The Button component is like the Swiss Army knife of UI elements—it's versatile, reliable, and always there when you need it. Need a clickable element to kick off actions like submitting forms, starting processes, or navigating through pages? Button's got your back!

- **When to use**: Use the Button component when you need a trusty sidekick for triggering actions in your app.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

- **npm**

  ```bash
  npm install @your-library/button
  ```

- **yarn**

  ```bash
  yarn add @your-library/button
  ```

- **pnpm**
  ```bash
  pnpm add @your-library/button
  ```

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
   <Button>Click Me</Button>
   ```

2. **Variants**:

   ```jsx
   <Button variant="primary">Primary</Button>
   <Button variant="secondary">Secondary</Button>
   ```

3. **Disabled State**:

   ```jsx
   <Button isDisabled>Disabled</Button>
   ```

4. **Loading State**:
   ```jsx
   <Button isLoading>Loading...</Button>
   ```

---

## 5. Customization and Theming

- You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
  ```

- Learn how to extend or override default styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type                                   | Description                        | Default     |
| ------------ | -------------------------------------- | ---------------------------------- | ----------- |
| `variant`    | `string`                               | The visual style of the button     | `"default"` |
| `size`       | `small` &#124; `medium` &#124; `large` | Adjusts the button size            | `"medium"`  |
| `isDisabled` | `boolean`                              | Disables the button                | `false`     |
| `onClick`    | `function`                             | Function triggered on button click | -           |
| `isLoading`  | `boolean`                              | Shows a loading spinner            | `false`     |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `(event: MouseEvent) => void` | Fires when the button is clicked |
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
  <Button variant="error">Error State</Button>
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

That's it! You're all set to button up your app with the Button component. Happy coding! 🚀
