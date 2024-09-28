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

No additional global dependencies are required.

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import** (if using a larger package)

  ```javascript
  import { Button } from "@global-library/button";
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

You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

```jsx
<Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
```

You can extend the default styles using Tailwind CSS classes or any CSS-in-JS solution. Pass in custom class names to override the default theme.

---

## 6. API Reference

### Component Props

| Prop Name  | Type       | Description                                               | Default     |
| ---------- | ---------- | --------------------------------------------------------- | ----------- |
| `label`    | `string`   | The label text displayed on the button                    | `""`        |
| `onClick`  | `function` | Callback function to be called when the button is clicked | `undefined` |
| `disabled` | `boolean`  | Whether the button is disabled                            | `false`     |
| `loading`  | `boolean`  | Whether the button is in a loading state                  | `false`     |
| `size`     | `string`   | Button size: 'small', 'medium', 'large'                   | `"medium"`  |
| `color`    | `string`   | Button color: 'primary', 'secondary', 'danger', 'success' | `"primary"` |

### Methods

#### `updateProps`

This method allows you to update the button’s properties dynamically.

```typescript
updateProps(newProps: Partial<ButtonProps>): void
```

- **Parameters**:
  - `newProps` (Partial<ButtonProps>): An object containing the new properties to be applied.
- **Returns**: `void`

#### `render`

This method appends the button to a target element in the DOM.

```typescript
render(target: HTMLElement): void
```

- **Parameters**:
  - `target` (HTMLElement): The target element where the button will be appended.
- **Returns**: `void`

### Events

| Event Name | Type         | Description                      |
| ---------- | ------------ | -------------------------------- |
| `onClick`  | `() => void` | Fires when the button is clicked |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `button` is applied to this component.
- **Keyboard Navigation**: Supports navigation via Tab, Enter, and Space keys.
- **Focus Management**: The button has proper focus management and a visible focus state.
- **Screen Readers**: The button provides screen reader compatibility with meaningful labels.

---

## 8. Best Practices

- Ensure that button labels are clear and meaningful.
- Avoid using too many visual variants in the same context.
- Use the loading state only when performing a long-running task.

---

## 9. Component States and Edge Cases

Handle different states like hover, focus, error, success:

```jsx
<Button className="hover:bg-gray-300">Hover Me</Button>
<Button className="focus:ring-2">Focus Me</Button>
<Button>Click me to perform a very long operation...</Button>
```

Ensure that edge cases, such as empty states or long text, are handled gracefully.

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

That's it! You're all set to start using the Button component. It's easier than it looks—just follow the examples and guidelines above, and you'll be integrating buttons like a pro! Don't worry, we'll cover all the details here! Happy coding!
