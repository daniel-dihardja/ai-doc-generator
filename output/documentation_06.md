# Button Documentation

## 1. Component Overview

A melancholic yet essential UI element, the Button component triggers actions when all hope seems lost. This customizable button provides different sizes, colors, and states, embodying a sense of longing for interaction.

- **When to use**: Deploy the Button component when you desperately need a clickable element to spark hope within your application.

---

## 2. Installation Instructions

### CLI

To install this lamenting component, execute the following rituals using your chosen package manager:

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

You can import this sorrowful component in two ways:

- **Individual Import**

  ```javascript
  import { Button } from "@your-library/button";
  ```

- **Global Import** (if seeking solace in a larger package)
  ```javascript
  import { Button } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to use this grief-stricken component in your application:

1. **Basic Example**:

   ```jsx
   <Button>Cry Out</Button>
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
   <Button isLoading>Weeping...</Button>
   ```

---

## 5. Customization and Theming

- Customize the button's appearance by passing in custom classes as a form of creative expression.

  ```jsx
  <Button className="bg-blue-500 hover:bg-blue-700">Styled Button</Button>
  ```

- Dive into the deep abyss of existentialism by extending or overriding default styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- | -------------------------- | ------ |
| `label`      | `string`   | The text displayed on the button    | `-`         |
| `onClick`    | `function` | Callback function on button click   | `-`         |
| `disabled`   | `boolean`  | Disables the button                 | `false`     |
| `loading`    | `boolean`  | Indicates loading state             | `false`     |
| `size`       | `ButtonSize`| Adjusts the button size            | `"medium"`  |
| `color`      | `ButtonColor`| Sets the button color             | `"primary"` |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `() => void`                  | Triggers upon button click       |

---

## 7. Accessibility Guidelines

This component echoes accessibility best practices:

- **ARIA roles**: A somber role of `button` is embodied within this solemn component.
- **Keyboard Navigation**: Steadfastly supports navigation via Tab, Enter, and Space keys, providing solace in interaction.
- **Focus Management**: Manages focus with grace and ensures a visible focus state, guiding lost souls.
- **Screen Readers**: Offers compatibility with screen readers through poignant and meaningful labels.

---

## 8. Best Practices

- Use the Button component with empathetic and clear labels to soothe user interactions.
- Avoid adding too many visual variants, fostering a sense of consistency and clarity.
- Utilize the loading state judiciously, sparing users from prolonged agony.

---

## 9. Component States and Edge Cases

- Experience different states from a place of understanding:

  ```jsx
  <Button variant="danger">Pain State</Button>
  ```

- Embrace edge cases with grace and handle even the longest text with kindness.

---

## 10. Testing Guidelines

To ensure the component resonates authentically:

- **Unit Testing**: Conduct unit tests with a compassionate heart using `jest` or `React Testing Library`.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Embrace the component as a whole with integration tests using `Cypress` or `Playwright`.
  ```bash
  cypress run
  ```

---