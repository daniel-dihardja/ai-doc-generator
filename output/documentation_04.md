# Button Documentation

## 1. Component Overview

The Button component is a magical UI element that grants wishes when clicked. It can be customized with different sizes, colors, and states (e.g., loading, disabled).

- **When to use**: Use the Button component when you need a clickable element to make dreams come true, submit forms, start quests, or navigate through enchanted lands.

---

## 2. Installation Instructions

### CLI

To install this component, cast the following spells using your preferred package manager:

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

You can summon this component in two ways:

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

Here’s how to use this magical component in your application:

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

- You can customize the component’s appearance by casting custom spells or using a magical theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
  ```

- Learn how to extend or override default enchantments.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- |
| `label`      | `string`   | The magical text displayed on the button | - |
| `onClick`    | `function` | Callback function to be called when the button is clicked | - |
| `disabled`   | `boolean`  | Whether the button is disabled | `false` |
| `loading`    | `boolean`  | Whether the button is in a loading state | `false` |
| `size`       | `small` &#124; `medium` &#124; `large` | Button size | `medium` |
| `color`      | `primary` &#124; `secondary` &#124; `danger` &#124; `success` | Button color | `primary` |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `(event: MouseEvent) => void` | Triggers when the button is clicked |
| `onChange` | `(value: string) => void`     | Casts a spell when the value changes |

---

## 7. Accessibility Guidelines

This component follows accessibility best practices:

- **ARIA roles**: Role of `button` is applied to this magical component.
- **Keyboard Navigation**: Full support for `Tab`, `Enter`, and `Space` key interactions.
- **Focus Management**: Proper focus management and visibility of focus state.
- **Screen Readers**: Provides screen reader compatibility with magical labels.

---

## 8. Best Practices

- Use the component with clear and meaningful enchantments.
- Avoid overloading the component with too many magical variations.
- Keep performance in mind when using with dynamic spells.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success:

  ```jsx
  <Button variant="danger">Error State</Button>
  ```

- Ensure that edge cases, such as empty states or long enchantments, are handled gracefully.

---

## 10. Testing Guidelines

To ensure the component works properly:

- **Unit Testing**: Use `Jest` or a crystal ball to test the component’s behavior.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or a magical wand for integration tests.
  ```bash
  cypress run
  ```

---