# Select Documentation

## 1. Component Overview

The Select component is a versatile dropdown menu that allows users to select one or multiple options from a list. It can be customized with different sizes, styles, and states (e.g., disabled, loading).

- **When to use**: Use the Select component when you need users to choose from a predefined set of options, such as selecting a category, filtering results, or choosing preferences.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

- **npm**

  ```bash
  npm install @your-library/select
  ```

- **yarn**

  ```bash
  yarn add @your-library/select
  ```

- **pnpm**
  ```bash
  pnpm add @your-library/select
  ```

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { Select } from "@your-library/select";
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { Select } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <Select options={["Option 1", "Option 2", "Option 3"]} />
   ```

2. **Multi-Select**:

   ```jsx
   <Select options={["Option 1", "Option 2", "Option 3"]} isMulti />
   ```

3. **Disabled State**:

   ```jsx
   <Select options={["Option 1", "Option 2"]} isDisabled />
   ```

4. **Loading State**:
   ```jsx
   <Select options={[]} isLoading />
   ```

---

## 5. Customization and Theming

- You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Select
    className="border-blue-500 focus:border-blue-700"
    options={["Option 1", "Option 2"]}
  />
  ```

- Learn how to extend or override default styles.

---

## 6. API Reference

### Component Props

| Prop Name     | Type                              | Description                                            | Default     |
| ------------- | --------------------------------- | ------------------------------------------------------ | ----------- |
| `options`     | `SelectOption[]`                  | List of options to display in the dropdown             | -           |
| `onChange`    | `(selectedValue: string) => void` | Callback function triggered when an option is selected | -           |
| `disabled`    | `boolean`                         | Whether the select is disabled                         | `false`     |
| `loading`     | `boolean`                         | Whether the select is in a loading state               | `false`     |
| `placeholder` | `string`                          | Placeholder text for the select                        | -           |
| `size`        | `SelectSize`                      | Size of the select: 'small', 'medium', 'large'         | `"medium"`  |
| `variant`     | `SelectVariant`                   | Variant of the select: 'default', 'outline', 'filled'  | `"default"` |

### Events

| Event Name | Type                              | Description                      |
| ---------- | --------------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fired when an option is selected |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `listbox` is applied to this component.
- **Keyboard Navigation**: Supports navigation via Arrow keys, Enter to select, and Esc to close the dropdown.
- **Focus Management**: The select has proper focus management and visible focus state, ensuring accessibility for keyboard users.
- **Screen Readers**: The component provides screen reader compatibility, announcing the selected option and available choices.

---

## 8. Best Practices

- Provide a clear label for the select component to indicate its purpose.
- Limit the number of options for a better user experience.
- Use the loading state when fetching options asynchronously.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success:

  ```jsx
  <Select options={["Option 1"]} className="border-red-500" />
  ```

- Ensure that edge cases, such as empty states or long text, are handled gracefully:

  ```jsx
  <Select options={[]} placeholder='No options available' />
  <Select options={['This is a very long option that might overflow', 'Option 2']} />
  ```

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest select.test.js
  ```

- **End-to-End Testing**: Use `Cypress` for integration tests.
  ```bash
  cypress run
  ```

---
