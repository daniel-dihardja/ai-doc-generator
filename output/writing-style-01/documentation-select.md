# Select Component Documentation

## 1. Component Overview

Hey there! The Select component is your go-to for creating a dropdown menu where users can pick one or multiple options from a list. It's super versatile, with various sizes, styles, and states like disabled or loading.

- **When to use**: Need users to choose from a set of options? Maybe they need to pick a category, filter search results, or just set some preferences. That's when you whip out the Select component!

---

## 2. Installation Instructions

### CLI

No worries, installing this component is a breeze. Just run the following commands using your favorite package manager:

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

No global dependencies to worry about here!

---

## 3. Importing the Component

You can bring this component into your project in a couple of ways:

- **Individual Import**

  ```javascript
  import { Select } from "@your-library/select";
  ```

- **Global Import**

  ```javascript
  import { Select } from "@your-library/select";
  ```

---

## 4. Usage Examples

Here's how you can start using the Select component in your app:

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

Want to style things up? No problem! You can customize the Select component’s look by passing custom classes or using a theming system like CSS-in-JS or Tailwind CSS.

- **Example**:

  ```jsx
  <Select
    className="border-blue-500 focus:border-blue-700"
    options={["Option 1", "Option 2"]}
  />
  ```

- **Theming**: You can apply your custom styles by passing class names to override the default theme. Get creative and make it match your app’s design!

---

## 6. API Reference

### Component Props

| Prop Name     | Type       | Description                                             | Default     |
| ------------- | ---------- | ------------------------------------------------------- | ----------- |
| `options`     | `array`    | List of options to display in the dropdown.             | `[]`        |
| `onChange`    | `function` | Callback function triggered when an option is selected. | `-`         |
| `disabled`    | `boolean`  | Disables the select.                                    | `false`     |
| `loading`     | `boolean`  | Sets the select to a loading state.                     | `false`     |
| `placeholder` | `string`   | Placeholder text for the select.                        | `-`         |
| `size`        | `string`   | Size of the select: 'small', 'medium', 'large'.         | `"medium"`  |
| `variant`     | `string`   | Variant of the select: 'default', 'outline', 'filled'.  | `"default"` |

### Events

| Event Name | Type                              | Description                      |
| ---------- | --------------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fires when an option is selected |

---

## 7. Accessibility Guidelines

We’ve got you covered with accessibility:

- **ARIA roles**: The role of `listbox` is applied to this component.
- **Keyboard Navigation**: Navigate using Arrow keys, select with Enter, and close the dropdown with Esc.
- **Focus Management**: Proper focus management and visible focus states ensure accessibility for keyboard users.
- **Screen Readers**: The component is screen reader-friendly, announcing selected options and available choices.

---

## 8. Best Practices

Here are some tips to help you use the Select component effectively:

- **Clear Labeling**: Always provide a clear label to indicate the select’s purpose.
- **Option Count**: Limit the number of options for a smoother user experience.
- **Loading State**: Use the loading state when fetching options asynchronously to keep users informed.

---

## 9. Component States and Edge Cases

The Select component handles various states and edge cases gracefully:

- **Empty State**:

  ```jsx
  <Select options={[]} placeholder="No options available" />
  ```

- **Error State**:

  ```jsx
  <Select options={["Option 1"]} className="border-red-500" />
  ```

- **Long Options**:

  ```jsx
  <Select
    options={["This is a very long option that might overflow", "Option 2"]}
  />
  ```

---

## 10. Testing Guidelines

To make sure everything works perfectly, you can test the Select component using:

- **Unit Testing**:

  ```bash
  jest select.test.js
  ```

- **End-to-End Testing**:

  ```bash
  cypress run
  ```

---

And there you have it! With these guidelines and examples, you should be all set to use and customize the Select component in your projects. Happy coding!
