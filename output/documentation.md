# Button Documentation

## 1. Component Overview

The Button component is a reusable UI element that triggers an action when clicked. It can be customized with different sizes, colors, and states (e.g., loading, disabled).

- **When to use**: Use the Button component when you need a clickable element to trigger actions like submitting forms, starting processes, or navigating through pages.

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
   <Button variant='primary'>Primary</Button>
   <Button variant='secondary'>Secondary</Button>
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
  <Button className='bg-blue-500 hover:bg-blue-700'>Styled Button</Button>
  ```

- Learn how to extend or override default styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- |
| `label`      | `string`   | The label text displayed on the button | - |
| `onClick`    | `() => void` | Callback function to be called when the button is clicked | - |
| `disabled`   | `boolean`  | Whether the button is disabled      | - |
| `loading`    | `boolean`  | Whether the button is in a loading state | - |
| `size`       | `ButtonSize` | Button size: 'small', 'medium', 'large' | `'medium'` |
| `color`      | `ButtonColor` | Button color: 'primary', 'secondary', 'danger', 'success' | `'primary'` |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `() => void` | Fires when the button is clicked |
| - | - | - |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `button` is applied to this component.
- **Keyboard Navigation**: Supports navigation via Tab, Enter, and Space keys.
- **Focus Management**: The button has proper focus management and a visible focus state.
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
  <Button className='hover:bg-gray-300'>Hover Me</Button>
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