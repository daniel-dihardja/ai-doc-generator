# RadioGroup Documentation

## 1. Component Overview

The RadioGroup component is like a DJ for your options, letting users pick just one tune from a playlist. It's the go-to choice when you need users to select a single option from a list, whether it's choosing their favorite color, deciding on a pizza topping, or even picking a superhero sidekick.

- **When to use**: Imagine scenarios where you want users to make a single choice from a set of options. That's where RadioGroup shines!

---

## 2. Installation Instructions

### CLI

To get your hands on this groovy component, bust out these commands using your favorite package manager:

- **npm**

  ```bash
  npm install @your-library/radiogroup
  ```

- **yarn**

  ```bash
  yarn add @your-library/radiogroup
  ```

- **pnpm**
  ```bash
  pnpm add @your-library/radiogroup
  ```

No need for any global dependencies to get this party started!

---

## 3. Importing the Component

You can bring this RadioGroup onto the stage in two ways:

- **Individual Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

- **Global Import** (if you're rolling with a larger package)
  ```javascript
  import { RadioGroup } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to rock out with this component in your app:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2", "Option 3"]} />
   ```

2. **Controlled Chaos**:

   ```jsx
   <RadioGroup
     value="Option 2"
     onChange={(value) => console.log(value)}
     options={["Option 1", "Option 2", "Option 3"]}
   />
   ```

3. **Silent Mode**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2"]} isDisabled />
   ```

4. **Horizontal Groove**:
   ```jsx
   <RadioGroup
     options={["Option 1", "Option 2", "Option 3"]}
     layout="horizontal"
   />
   ```

---

## 5. Customization and Theming

- Jam out with the RadioGroup's appearance by tossing in custom classes or styling options. Whether you prefer CSS classes or inline styles, you can tweak colors, spacing, and layouts to match your design vibe.

  ```jsx
  <RadioGroup options={["Option 1", "Option 2"]} className="text-blue-600" />
  ```

- Dive deep into theming to give your RadioGroup a unique look that screams your style!

---

## 6. API Reference

### Component Props

| Prop Name       | Type                              | Description                                                  | Default |
| --------------- | --------------------------------- | ------------------------------------------------------------ | ------- |
| `options`       | `RadioOption[]`                   | List of radio options to display in the group                | -       |
| `onChange`      | `(selectedValue: string) => void` | Callback function triggered when a radio option is selected  | -       |
| `selectedValue` | `string`                          | Currently selected value                                     | -       |
| `disabled`      | `boolean`                         | Whether the radio group is disabled                          | `false` |
| `size`          | `RadioSize`                       | Size of the radio buttons: 'small', 'medium', 'large'        | -       |
| `variant`       | `RadioVariant`                    | Variant of the radio buttons: 'default', 'outline', 'filled' | -       |

### Events

| Event Name | Type                              | Description                           |
| ---------- | --------------------------------- | ------------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fires when a radio option is selected |

---

## 7. Accessibility Guidelines

This RadioGroup is all about inclusivity and accessibility:

- **ARIA roles**: The RadioGroup takes on the role of `radiogroup`, making sure screen readers know what's up.
- **Keyboard Navigation**: Users can groove through options using Arrow keys, making selection a breeze.
- **Focus Management**: Smooth focus transitions ensure users always know which option is in the spotlight.
- **Screen Readers**: Meaningful labels for each radio button help screen readers navigate with ease.

---

## 8. Best Practices

- Make sure your RadioGroup has a label that tells users what they're choosing.
- Keep radio option labels distinct to avoid any mix-ups.
- Let users know which option is selected by default or allow no selection if needed.

---

## 9. Component States and Edge Cases

- Handle different vibes like hover, focus, error, success:

  ```jsx
  <RadioGroup options={["Option 1", "Option 2", "Option 3"]} variant="error" />
  ```

- Make sure your RadioGroup can handle those long-winded labels gracefully:

  ```jsx
  <RadioGroup
    options={["A very long option label that might overflow", "Option 2"]}
  />
  ```

---

## 10. Testing Guidelines

To keep the beat going with the RadioGroup:

- **Unit Testing**: Test the component's moves using `jest` or `React Testing Library`.

  ```bash
  jest radiogroup.test.js
  ```

- **End-to-End Testing**: Put the RadioGroup through its paces with `Cypress` or `Playwright` for integration tests.

  ```bash
  cypress run radiogroup.cy.js
  ```

---

Now that you're armed with the knowledge to rock the RadioGroup, go forth and create amazing user experiences! 🎶📻🎵
