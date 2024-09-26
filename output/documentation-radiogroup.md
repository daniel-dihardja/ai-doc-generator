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

Include any global dependencies if necessary.

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { RadioGroup } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2", "Option 3"]} />
   ```

2. **Controlled Example**:

   ```jsx
   <RadioGroup
     value="Option 2"
     onChange={(value) => console.log(value)}
     options={["Option 1", "Option 2", "Option 3"]}
   />
   ```

3. **Disabled State**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2"]} isDisabled />
   ```

4. **Horizontal Layout**:
   ```jsx
   <RadioGroup
     options={["Option 1", "Option 2", "Option 3"]}
     layout="horizontal"
   />
   ```

---

## 5. Customization and Theming

- You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <RadioGroup options={["Option 1", "Option 2"]} className="text-blue-600" />
  ```

- Customize the RadioGroup with CSS classes or inline styles. Pass in custom class names to modify colors, spacing, and layout to fit your design system.

---

## 6. API Reference

### Component Props

| Prop Name       | Type                              | Description                                                  | Default |
| --------------- | --------------------------------- | ------------------------------------------------------------ | ------- |
| `options`       | `RadioOption[]`                   | List of radio options to display in the group                | -       |
| `onChange`      | `(selectedValue: string) => void` | Callback function triggered when a radio option is selected  | -       |
| `selectedValue` | `string`                          | Currently selected value                                     | -       |
| `disabled`      | `boolean`                         | Whether the radio group is disabled                          | `false` |
| `size`          | `RadioSize`                       | Size of the radio buttons: 'small', 'medium', 'large'        | -       |
| `variant`       | `RadioVariant`                    | Variant of the radio buttons: 'default', 'outline', 'filled' | -       |

### Events

| Event Name | Type                              | Description                                                 |
| ---------- | --------------------------------- | ----------------------------------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Callback function triggered when a radio option is selected |

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
  <RadioGroup options={["Option 1", "Option 2", "Option 3"]} value="" />
  ```

- Ensure that edge cases, such as empty states or long text, are handled gracefully.

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `jest radiogroup.test.js` to test the component’s behavior.

- **End-to-End Testing**: Use `cypress run radiogroup.cy.js` for integration tests.

---
