# RadioGroup Documentation

## 1. Component Overview

The RadioGroup component is like a DJ for your options, letting users pick a single tune from a playlist of choices. It offers various layouts, styles, and supports both controlled and uncontrolled states.

- **When to use**: Use RadioGroup when you need users to select just one option from a list, like choosing a mood, a favorite color, or a pizza topping.

---

## 2. Installation Instructions

### CLI

To install this component, run the following commands using your preferred package manager:

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

---

## 3. Importing the Component

You can import this component in two ways:

- **Individual Import**

  ```javascript
  import { RadioGroup } from "@your-library/radiogroup";
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { RadioGroup } from "@your-library/react";
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2", "Option 3"]} />
   ```

2. **Controlled Example**:

   ```jsx
   <RadioGroup
     value="Option 2"
     onChange={(value) => console.log(value)}
     options={["Option 1", "Option 2", "Option 3"]}
   />
   ```

3. **Disabled State**:

   ```jsx
   <RadioGroup options={["Option 1", "Option 2"]} isDisabled />
   ```

4. **Horizontal Layout**:
   ```jsx
   <RadioGroup
     options={["Option 1", "Option 2", "Option 3"]}
     layout="horizontal"
   />
   ```

---

## 5. Customization and Theming

- You can give the RadioGroup a makeover by adding custom classes or using inline styles.

  ```jsx
  <RadioGroup options={["Option 1", "Option 2"]} className="text-blue-600" />
  ```

- Dive into theming to spruce up the RadioGroup with your own colors, spacing, and layout to match your style.

---

## 6. API Reference

### Component Props

| Prop Name       | Type                              | Description                                                  | Default   |
| --------------- | --------------------------------- | ------------------------------------------------------------ | --------- |
| `options`       | `RadioOption[]`                   | List of radio options to display in the group                | -         |
| `onChange`      | `(selectedValue: string) => void` | Callback function when an option is selected                 | -         |
| `selectedValue` | `string`                          | Currently selected value                                     | -         |
| `disabled`      | `boolean`                         | Whether the radio group is disabled                          | `false`   |
| `size`          | `RadioSize`                       | Size of the radio buttons: 'small', 'medium', 'large'        | `medium`  |
| `variant`       | `RadioVariant`                    | Variant of the radio buttons: 'default', 'outline', 'filled' | `default` |

### Events

| Event Name | Type                              | Description                      |
| ---------- | --------------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fired when an option is selected |

---

## 7. Accessibility Guidelines

This component is your accessibility buddy:

- **ARIA roles**: Gets the role of `radiogroup` for a smooth performance.
- **Keyboard Navigation**: Easily navigate through options using Arrow keys for a jazzy experience.
- **Focus Management**: Handles focus like a pro, ensuring the selected option shines bright.
- **Screen Readers**: Plays nice with screen readers by giving each radio button its moment in the spotlight.

---

## 8. Best Practices

- Give your RadioGroup a name to remember by providing a label.
- Avoid mix-ups by giving each option a unique label.
- Make sure the default choice is crystal clear or offer no selection to avoid any radio silence.

---

## 9. Component States and Edge Cases

- Handle different vibes like hover, focus, error, and success:

  ```jsx
  <RadioGroup options={["Option 1", "Option 2", "Option 3"]} variant="error" />
  ```

- Dance gracefully around edge cases like long labels or empty states:

  ```jsx
  <RadioGroup
    options={["A very long option label that might overflow", "Option 2"]}
  />
  ```

---

## 10. Testing Guidelines

To ensure your RadioGroup hits all the right notes:

- **Unit Testing**: Use `jest radiogroup.test.js` for testing the component’s rhythm.
- **End-to-End Testing**: Run `cypress run radiogroup.cy.js` to make sure all the parts play well together.

---

This RadioGroup component is your trusty sidekick for selecting options in style. Let the good times and the good choices roll! 🎶
