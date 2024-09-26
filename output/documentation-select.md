# Select Documentation

## 1. Component Overview

The Select component is a versatile dropdown menu that allows users to choose one or multiple options from a list. This component can be customized with different sizes, styles, and states such as disabled or loading.

- **When to use**: Use the Select component when you want users to select from a predefined set of options, like choosing a category, filtering results, or setting preferences.

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
  import { Select } from '@your-library/select';
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { Select } from '@your-library/react';
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <Select options={['Option 1', 'Option 2', 'Option 3']} />
   ```

2. **Multi-Select**:

   ```jsx
   <Select options={['Option 1', 'Option 2', 'Option 3']} isMulti />
   ```

3. **Disabled State**:

   ```jsx
   <Select options={['Option 1', 'Option 2']} isDisabled />
   ```

4. **Loading State**:
   ```jsx
   <Select options={[]} isLoading />
   ```

---

## 5. Customization and Theming

- You can customize the component’s appearance by passing custom classes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Select className='border-blue-500 focus:border-blue-700' options={['Option 1', 'Option 2']} />
  ```

- Learn how to extend or override default styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- | -------------------------- | ------ |
| `options`    | `Array`    | List of options to display         | `[]`        |
| `onChange`   | `function` | Callback for option selection      | `-`         |
| `disabled`   | `boolean`  | Disables the select                | `false`     |
| `loading`    | `boolean`  | Loading state indicator            | `false`     |
| `placeholder`| `string`   | Placeholder text for select        | `null`      |
| `size`       | `SelectSize`| Size of select ('small', 'medium', 'large') | `"medium"` |
| `variant`    | `SelectVariant`| Visual variant of select      | `"default"` |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void`| Triggered on option selection|

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `listbox` is applied to this component.
- **Keyboard Navigation**: Supports Arrow keys for navigation, Enter for selection, and Esc to close the dropdown.
- **Focus Management**: Proper focus management and visible focus state for keyboard users.
- **Screen Readers**: Provides screen reader compatibility, announcing selected options and available choices.

---

## 8. Best Practices

- Provide a clear label for the select component to indicate its purpose.
- Limit the number of options for a better user experience.
- Use the loading state when fetching options asynchronously.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success:

  ```jsx
  <Select options={['Option 1']} className='border-red-500' />
  ```

- Ensure that edge cases, such as empty states or long text, are handled gracefully.

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest select.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.
  ```bash
  cypress run
  ```

---

This Select component makes selecting options a breeze with its customizable features and accessibility support. Don’t worry if this looks confusing; even the best of us have Googled this more than once! Happy coding!