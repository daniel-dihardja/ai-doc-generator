# RadioGroup Documentation

## 1. Component Overview

The RadioGroup component is designed for selecting a single option from a list of predefined choices. This component offers different layouts, styles, and supports both controlled and uncontrolled states.

- **When to use**: Use RadioGroup when you want the user to pick only one option out of a given set, such as selecting a gender, choosing a payment method, or setting a preference.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

- **npm**

  ```bash
  npm install @your-library/radiogroup
  ```

- **yarn**

  ```bash
  yarn add @your-library/radiogroup
  ```

- **pnpm**

  ```bash
  pnpm add @your-library/radiogroup
  ```

No additional global dependencies are required.

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

- **Global Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} />
   ```

2. **Controlled Example**:

   ```jsx
   <RadioGroup value='Option 2' onChange={(value) => console.log(value)} options={['Option 1', 'Option 2', 'Option 3']} />
   ```

3. **Disabled State**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2']} isDisabled />
   ```

4. **Horizontal Layout**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} layout='horizontal' />
   ```

---

## 5. Customization and Theming

You can customize the component’s appearance by passing custom classes or using a theming mechanism:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className="text-blue-600" />
  ```

Customize the RadioGroup with CSS classes or inline styles. Pass in custom class names to modify colors, spacing, and layout to fit your design system.

---

## 6. API Reference

### Component Props

| Prop Name     | Type              | Description                                   | Default     |
| ------------- | ----------------- | --------------------------------------------- | ----------- |
| `options`     | `RadioOption[]`   | List of radio options to display in the group | `[]`        |
| `onChange`    | `function`        | Callback function triggered on option select  | `undefined` |
| `selectedValue` | `string`        | Currently selected value                      | `undefined` |
| `disabled`    | `boolean`         | Whether the radio group is disabled           | `false`     |
| `size`        | `"small" \| "medium" \| "large"` | Size of the radio buttons           | `"medium"`  |
| `variant`     | `"default" \| "outline" \| "filled"` | Variant of the radio buttons       | `"default"` |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `radiogroup` is applied to this component.
- **Keyboard Navigation**: Allows navigation through Arrow keys to change the selection within the group.
- **Focus Management**: Automatically handles focus when navigating options, ensuring the selected option is focusable.
- **Screen Readers**: Supports screen readers by providing meaningful labels for each radio button within the group.

---

## 8. Best Practices

- Always provide a label for the RadioGroup to indicate its purpose.
- Use distinct labels for each radio option to avoid confusion.
- Ensure that the default selected option is clear to the user, or allow no selection initially if required.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className="border-red-500" error="Please select an option." />
  ```

- Ensure that edge cases, such as empty states or long text, are handled gracefully.

  ```jsx
  <RadioGroup options={['A very long option label that might overflow', 'Option 2']} />
  ```

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest radiogroup.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.

  ```bash
  cypress run radiogroup.cy.js
  ```

---

This documentation covers all you need to get started with the RadioGroup component. It's easier than it looks—dive in and start building! Don’t worry, we’ve covered all the details here, so you’re supported every step of the way. Happy coding!