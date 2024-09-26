# Select Documentation

## 1. Component Overview

The Select component is like a magical dropdown menu that lets users choose one or multiple options from a list. It's so versatile that you can customize it with different sizes, styles, and even states like disabled or loading.

- **When to use**: Imagine you need users to select a category, filter results, or choose preferences. The Select component is your friend in these scenarios.

---

## 2. Installation Instructions

### CLI

To install this component, sprinkle some magic with your preferred package manager:

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

You can bring this magical component into your realm in two ways:

- **Individual Import**

  ```javascript
  import { Select } from '@your-library/select';
  ```

- **Global Import** (for larger packages)
  ```javascript
  import { Select } from '@your-library/react';
  ```

---

## 4. Usage Examples

Let's perform some magic tricks with this component:

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

The magic continues with customizing the Select component:

- Add your own spell with custom classes like this:

  ```jsx
  <Select className='border-blue-500 focus:border-blue-700' options={['Option 1', 'Option 2']} />
  ```

- Let your creativity shine by using CSS classes to theme this component.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- |
| `options`    | `SelectOption[]`   | List of options to display in the dropdown. | - |
| `onChange`   | `(selectedValue: string) => void` | Callback function triggered when an option is selected. | - |
| `disabled`   | `boolean`  | Whether the select is disabled.    | `false`     |
| `loading`    | `boolean`  | Whether the select is in a loading state. | `false`     |
| `placeholder`| `string`   | Placeholder text for the select.    | -           |
| `size`       | `SelectSize` | Size of the select: 'small', 'medium', 'large'. | `"medium"` |
| `variant`    | `SelectVariant` | Variant of the select: 'default', 'outline', 'filled'. | `"default"` |

---

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fired when an option is selected |

---

## 7. Accessibility Guidelines

This component is built with accessibility in mind:

- **ARIA roles**: The Select component takes on the role of a listbox for improved accessibility.
- **Keyboard Navigation**: Use Arrow keys, Enter to select, and Esc to close the dropdown for easy navigation.
- **Focus Management**: Proper focus management ensures that keyboard users have a smooth experience.
- **Screen Readers**: Works like a charm with screen readers, announcing selected options clearly.

---

## 8. Best Practices

- Keep your labels clear and meaningful for a smoother user experience.
- Less is more! Limit the number of options to avoid overwhelming your users.
- Use the loading state wisely, especially when fetching options dynamically.

---

## 9. Component States and Edge Cases

Let's tackle different scenarios and edge cases like a boss:

- Show off your error handling skills with a touch of magic:

  ```jsx
  <Select options={['Option 1']} className='border-red-500' />
  ```

- Handle empty states gracefully:

  ```jsx
  <Select options={[]} placeholder='No options available' />
  ```

- Embrace the long options gracefully:

  ```jsx
  <Select options={['This is a very long option that might overflow', 'Option 2']} />
  ```

---

## 10. Testing Guidelines

To ensure this magical component works flawlessly:

- **Unit Testing**: Cast your spells with `jest` or `React Testing Library`.

  ```bash
  jest select.test.js
  ```

- **End-to-End Testing**: Enchant your tests with `Cypress` or `Playwright`.

  ```bash
  cypress run
  ```

---

Behold the Select component, a magical tool for your UI enchantments! Let the magic flow through your app with ease. Don't worry if this looks confusing; even the best of us have Googled this more than once! Let the wizardry of the Select component bring joy to your users! 🧙🌟