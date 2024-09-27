# Button Documentation

## 1. Component Overview

Hey there! Meet the Button component – your go-to clickable element for triggering actions. Whether you need to submit a form, start a process, or navigate between pages, this Button has got your back. Super customizable with different sizes, colors, and states like loading or disabled. Let's dive in!

- **When to use**: Anytime you need a clickable element to get things done, from submitting forms to starting processes or navigating pages.

---

## 2. Installation Instructions

Alright, let's get this Button into your project! You can use your favorite package manager:

### CLI

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

No global dependencies needed. Easy peasy!

---

## 3. Importing the Component

You’ve got options here. Choose what suits you best:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

---

## 4. Usage Examples

Let's see this Button in action!

1. **Basic Example**:

   ```jsx
   <Button label="Click Me" />
   ```

2. **Variants**:

   ```jsx
   <Button label="Primary" color="primary" />
   <Button label="Secondary" color="secondary" />
   ```

3. **Disabled State**:

   ```jsx
   <Button label="Disabled" disabled />
   ```

4. **Loading State**:

   ```jsx
   <Button label="Loading..." loading />
   ```

---

## 5. Customization and Theming

Want to make it look just right? Customize away!

- Pass custom classes or use your favorite theming method (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button label="Styled Button" className="bg-blue-500 hover:bg-blue-700" />
  ```

- Extend or override default styles to make it your own. You can use Tailwind CSS classes or any CSS-in-JS solution.

---

## 6. API Reference

### Component Props

| Prop Name  | Type       | Description                                                 | Default     |
| ---------- | ---------- | ----------------------------------------------------------- | ----------- |
| `label`    | `string`   | The text displayed on the button.                           | -           |
| `onClick`  | `function` | Function triggered when the button is clicked.              | `undefined` |
| `disabled` | `boolean`  | Disables the button.                                        | `false`     |
| `loading`  | `boolean`  | Shows loading state on the button.                          | `false`     |
| `size`     | `string`   | Adjusts the button size (`small`, `medium`, `large`).       | `"medium"`  |
| `color`    | `string`   | Button color (`primary`, `secondary`, `danger`, `success`). | `"primary"` |

---

## 7. Accessibility Guidelines

We’ve got accessibility covered:

- **ARIA roles**: The button comes with a role of `button`.
- **Keyboard Navigation**: Fully supports `Tab`, `Enter`, and `Space` key interactions.
- **Focus Management**: The button has proper focus management and a visible focus state.
- **Screen Reader Compatibility**: Provides meaningful labels for screen readers.

---

## 8. Best Practices

Here are some tips to get the most out of your Button:

- Use clear and meaningful labels.
- Don’t overload it with too many visual variants.
- Save the loading state for long-running tasks.

---

## 9. Component States and Edge Cases

Buttons aren’t just one-trick ponies. Handle different states like a pro:

- **Hover State**:

  ```jsx
  <Button label="Hover Me" className="hover:bg-gray-300" />
  ```

- **Focus State**:

  ```jsx
  <Button label="Focus Me" className="focus:ring-2" />
  ```

- **Long Text State**:

  ```jsx
  <Button label="Click me to perform a very long operation..." />
  ```

---

## 10. Testing Guidelines

Keep your Button in tip-top shape with these testing tips:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the button’s behavior.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.

  ```bash
  cypress run
  ```

---

And that’s it! You’re all set to use the Button component in your projects. If you have any questions or run into any issues, no worries – just reach out. Happy coding!
