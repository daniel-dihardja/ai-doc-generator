# Button Documentation

## 1. Component Overview

The Button component is like a trusty sidekick in the world of UI elements. It stands ready to trigger actions when clicked, offering a range of customization options like sizes, colors, and states (including a cool loading animation).

- **When to use**: Imagine a scenario where you need a magical button to cast spells like submitting forms, initiating quests, or teleporting to different pages.

---

## 2. Installation Instructions

### CLI

To summon this component, chant the following incantations using your preferred package manager:

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

You can call forth this button in two ways:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import** (for the grand sorcerers)
  ```javascript
  import { Button } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how you can perform magic tricks with this component:

1. **Basic Example**:

   ```jsx
   <Button>Click Me</Button>
   ```

2. **Variants**:

   ```jsx
   <Button variant='primary'>Primary</Button>
   <Button variant='secondary'>Secondary</Button>
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

- You can sprinkle some fairy dust on the button’s appearance by passing custom classes or using your magic wand (CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
  ```

- Learn the art of extending or overriding default styles.

---

## 6. API Reference

### Component Props

| Prop Name  | Type          | Description                                               | Default   |
| ---------- | ------------- | --------------------------------------------------------- | --------- |
| `label`    | `string`      | The label text displayed on the button                    | -         |
| `onClick`  | `() => void`  | Callback function on button click                         | -         |
| `disabled` | `boolean`     | Disables the button                                       | `false`   |
| `loading`  | `boolean`     | Puts the button in a loading state                        | `false`   |
| `size`     | `ButtonSize`  | Button size: 'small', 'medium', 'large'                   | `medium`  |
| `color`    | `ButtonColor` | Button color: 'primary', 'secondary', 'danger', 'success' | `primary` |

### Events

| Event Name | Type                      | Description                      |
| ---------- | ------------------------- | -------------------------------- |
| `onClick`  | `() => void`              | Fires when the button is clicked |
| `onChange` | `(value: string) => void` | Fired when the value changes     |

---

## 7. Accessibility Guidelines

This component is as friendly as a smiley wizard:

- **ARIA roles**: It assumes the role of a `button`.
- **Keyboard Navigation**: Supports the magical keys `Tab`, `Enter`, and `Space` for navigation.
- **Focus Management**: Keeps track of focus and shows it off visibly.
- **Screen Readers**: Speaks the language of screen readers with meaningful labels.

---

## 8. Best Practices

- Keep the button labels as enchanting as possible.
- Avoid overloading the button with too many spells (visual variants).
- Save the loading spell for epic quests and long-running tasks.

---

## 9. Component States and Edge Cases

- Embrace different states like the mystical hover, focused gaze, and the saga of long text:

  ```jsx
  <Button className="hover:bg-gray-300">Hover Me</Button>
  ```

- Handle edge cases with grace, like decoding ancient scrolls or dealing with lengthy prophecies:

  ```jsx
  <Button>Click me to perform a very long operation...</Button>
  ```

---

## 10. Testing Guidelines

To ensure the magic is strong with this one:

- **Unit Testing**: Cast spells with `Jest` or `React Testing Library` to test the button’s powers.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Dive deeper with `Cypress` or `Playwright` for epic adventures in integration testing.
  ```bash
  cypress run
  ```

---
