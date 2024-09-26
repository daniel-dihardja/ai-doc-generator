# Button Documentation

## 1. Component Overview

The Button component is a hilarious UI element that triggers uncontrollable laughter when clicked. It can be customized with different jokes, colors, and states (e.g., loading, disabled).

- **When to use**: Use the Button component when you need a good laugh, want to add humor to your application, or spread joy through your users' interactions.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

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

You can import this component in two ways:

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

Here’s how to use this hilarious component in your application:

1. **Why Did the Button Cross the Road?**:

   ```jsx
   <Button>To Tell a Joke</Button>
   ```

2. **Variants**:

   ```jsx
   <Button variant="primary">Primary Joke</Button>
   <Button variant="secondary">Secondary Joke</Button>
   ```

3. **Disabled State**:

   ```jsx
   <Button isDisabled>Can't Joke Right Now</Button>
   ```

4. **Loading State**:
   ```jsx
   <Button isLoading>Loading Jokes...</Button>
   ```

---

## 5. Customization and Theming

- You can customize the button's humor by passing in custom jokes or using a theming mechanism (e.g., CSS-in-JS, Tailwind CSS).

  ```jsx
  <Button className="bg-red-500 hover:bg-red-700">Hilarious Button</Button>
  ```

- Learn how to extend or override default humor styles.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                        | Default     |
| ------------ | ---------- | ---------------------------------- | ----------- | -------------------------- | ------ |
| `label`      | `string`   | The joke text displayed on the button | `-`         |
| `onClick`    | `function` | The laughter-triggering function to be called when the button is clicked | `-`         |
| `disabled`   | `boolean`  | Prevents any comedic relief from the button | `false`     |
| `loading`    | `boolean`  | Indicates a loading state for the button | `false`     |
| `size`       | `ButtonSize` | Adjusts the size of the button: 'small', 'medium', 'large' | "medium" |
| `color`      | `ButtonColor` | The color scheme of the button: 'primary', 'secondary', 'danger', 'success' | "primary" |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onClick`  | `() => void` | Triggers laughter when the button is clicked |
| `onChange` | `(value: string) => void`     | Changes the joke value for more humor |

---

## 7. Accessibility Guidelines

This hysterical component follows accessibility best practices:

- **ARIA roles**: Role of `button` is applied to this jokester button.
- **Keyboard Navigation**: Full support for `Tab`, `Enter`, and `Space` key interactions for maximum comedic effect.
- **Focus Management**: Proper focus management to ensure everyone pays attention to the jokes.
- **Screen Readers**: Provides screen reader compatibility with entertaining labels.

---

## 8. Best Practices

- Use the button with side-splitting jokes to keep users entertained.
- Avoid using dark or inappropriate humor in the same context.
- Use the loading state to tease users with a never-ending joke.

---

## 9. Component States and Edge Cases

- Handle different states like a joke that's funny, hilarious, or downright sidesplitting:

  ```jsx
  <Button variant="danger">Dangerously Funny</Button>
  ```

- Ensure that edge cases, such as extremely long jokes or jokes that fall flat, are handled gracefully.

---

## 10. Testing Guidelines

To ensure the button brings laughter to all users:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the button's humor.

  ```bash
  jest button.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests. Expect a lot of laughter!
  ```bash
  cypress run
  ```

---