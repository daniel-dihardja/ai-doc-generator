# RadioGroup Documentation

## 1. Component Overview

Hey there! The RadioGroup component is your go-to when you need users to choose just one option from a list of choices. Think about picking a favorite ice cream flavor or selecting a payment method. Easy peasy, right?

- **When to use**: Use RadioGroup whenever you want the user to pick only one option out of a given set, like selecting a gender, choosing a payment method, or setting a preference.

---

## 2. Installation Instructions

### CLI

To bring this awesome component into your project, just run one of these commands using your preferred package manager:

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

No need for any global dependencies here. You’re all set!

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

---

## 4. Usage Examples

Let’s dive right into how you can use this component in your application:

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

Want to make it look snazzy? Here’s how you can customize the component’s appearance:

- Pass custom classes or use a theming mechanism like CSS-in-JS or Tailwind CSS.

  ```jsx
  <RadioGroup options={["Option 1", "Option 2"]} className="text-blue-600" />
  ```

- Customize the RadioGroup with CSS classes or inline styles. Pass in custom class names to modify colors, spacing, and layout to fit your design system.

---

## 6. API Reference

### Component Props

Here’s the lowdown on the props you can use with RadioGroup:

| Prop Name       | Type                      | Description                                                  | Default     |
| --------------- | ------------------------- | ------------------------------------------------------------ | ----------- |
| `options`       | `RadioOption[]`           | List of radio options to display in the group                | `[]`        |
| `onChange`      | `(value: string) => void` | Callback function triggered when a radio option is selected  | `undefined` |
| `selectedValue` | `string`                  | Currently selected value                                     | `undefined` |
| `disabled`      | `boolean`                 | Whether the radio group is disabled                          | `false`     |
| `size`          | `RadioSize`               | Size of the radio buttons: 'small', 'medium', 'large'        | `"medium"`  |
| `variant`       | `RadioVariant`            | Variant of the radio buttons: 'default', 'outline', 'filled' | `"default"` |

### Events

| Event Name | Type                      | Description                           |
| ---------- | ------------------------- | ------------------------------------- |
| `onChange` | `(value: string) => void` | Fires when a radio option is selected |

---

## 7. Accessibility Guidelines

We’ve got you covered with accessibility best practices:

- **ARIA roles**: The role of `radiogroup` is applied to this component.
- **Keyboard Navigation**: Supports navigation through Arrow keys to change the selection within the group.
- **Focus Management**: Automatically handles focus when navigating options, ensuring the selected option is focusable.
- **Screen Readers**: Supports screen readers by providing meaningful labels for each radio button within the group.

---

## 8. Best Practices

Here are some tips to make the most out of your RadioGroup:

- Always provide a label for the RadioGroup to indicate its purpose.
- Use distinct labels for each radio option to avoid confusion.
- Ensure that the default selected option is clear to the user, or allow no selection initially if required.

---

## 9. Component States and Edge Cases

Take care of different states and edge cases like a pro:

- **No Selection**:

  ```jsx
  <RadioGroup options={["Option 1", "Option 2", "Option 3"]} value="" />
  ```

- **Error State**:

  ```jsx
  <RadioGroup
    options={["Option 1", "Option 2"]}
    className="border-red-500"
    error="Please select an option."
  />
  ```

- **Long Labels**:

  ```jsx
  <RadioGroup
    options={["A very long option label that might overflow", "Option 2"]}
  />
  ```

---

## 10. Testing Guidelines

To make sure everything works smoothly:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest radiogroup.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.

  ```bash
  cypress run radiogroup.cy.js
  ```

---

And there you have it! A complete guide to using the RadioGroup component. Happy coding! 🚀
