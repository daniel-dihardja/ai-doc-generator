# Button Documentation

## 1. Component Overview

The Button component is like a magical portal in your app, waiting for a gentle tap to unleash its powers. It's a versatile UI element that can be customized with different sizes, colors, and states. Use the Button when you need to sprinkle some interactivity in your app – from form submissions to world-saving actions!

---

## 2. Installation Instructions

### CLI

To summon this mystical Button into your project, chant the following incantations based on your package manager of choice:

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

You can beckon the Button in two ways:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import** (for grander packages)
  ```javascript
  import { Button } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how you can wield this Button in your app:

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

- Unleash your creativity by adding custom classes or using magical theming mechanisms like CSS-in-JS or Tailwind CSS.

  ```jsx
  <Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
  ```

- Explore the mystical realm of extending or overriding default styles.

---

## 6. API Reference

### Component Props

| Prop Name  | Type          | Description                                               | Default   |
| ---------- | ------------- | --------------------------------------------------------- | --------- |
| `label`    | `string`      | The label text displayed on the button                    | -         |
| `onClick`  | `() => void`  | Callback function when the button is clicked              | -         |
| `disabled` | `boolean`     | Disables the button                                       | `false`   |
| `loading`  | `boolean`     | Sets the button in a loading state                        | `false`   |
| `size`     | `ButtonSize`  | Button size: 'small', 'medium', 'large'                   | `medium`  |
| `color`    | `ButtonColor` | Button color: 'primary', 'secondary', 'danger', 'success' | `primary` |

### Events

| Event Name | Type                      | Description                      |
| ---------- | ------------------------- | -------------------------------- |
| `onClick`  | `() => void`              | Fires when the button is clicked |
| `onChange` | `(value: string) => void` | Fired when the value changes     |

---

## 7. Accessibility Guidelines

This Button is a beacon of accessibility, leading the way for all users:

- **ARIA roles**: Embraces the role of `button` gracefully.
- **Keyboard Navigation**: Guides users with `Tab`, `Enter`, and `Space` keys.
- **Focus Management**: Ensures focus is never lost, like a loyal companion.
- **Screen Readers**: Speaks the language of screen readers with meaningful labels.

---

## 8. Best Practices

- Speak to the Button kindly with clear and meaningful labels.
- Avoid overwhelming it with too many visual variants – it needs breathing room.
- Use the loading state wisely, like giving a wizard time to prepare a spell.

---

## 9. Component States and Edge Cases

- Witness the Button in different states:

  ```jsx
  <Button variant="danger">Danger State</Button>
  ```

- Even in the darkest of times, the Button shines bright with grace and handles long texts elegantly.

---

## 10. Testing Guidelines

To ensure the Button remains a beacon of light in your app:

- **Unit Testing**: Put it through trials with `Jest` or `React Testing Library`.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Watch over it with the keen eye of `Cypress`.

  ```bash
  cypress run
  ```

---

May the Button always be clicked with purpose and may its journey through your app be filled with joy and wonder! 🪄🌟
