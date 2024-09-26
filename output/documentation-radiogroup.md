# RadioGroup Documentation

## 1. Component Overview

The RadioGroup component is like the conductor of a symphony, orchestrating the selection of a single option from a list of choices. With its different layouts, styles, and support for controlled and uncontrolled states, RadioGroup ensures harmony in your user interfaces.

- **When to use**: Use RadioGroup when you need users to pick just one option from a lineup, like choosing a favorite color, selecting a pizza topping, or deciding on a superhero alter ego.

---

## 2. Installation Instructions

### CLI

To bring RadioGroup into your project, conduct the following commands using your preferred package manager:

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

No global dependencies needed for this maestro.

---

## 3. Importing the Component

You have two ways to invite RadioGroup to your UI ensemble:

- **Individual Import**

  ```javascript
  import { RadioGroup } from '@your-library/radiogroup';
  ```

- **Global Import** (for a grander package)
  ```javascript
  import { RadioGroup } from '@your-library/react';
  ```

---

## 4. Usage Examples

Here’s how to let RadioGroup take the spotlight in your application:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} />
   ```

2. **Controlled State**:

   ```jsx
   <RadioGroup value='Option 2' onChange={(value) => console.log(value)} options={['Option 1', 'Option 2', 'Option 3']} />
   ```

3. **Disabled State**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2']} isDisabled />
   ```

4. **Horizontal Layout**:
   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} layout='horizontal' />
   ```

---

## 5. Customization and Theming

- Customize RadioGroup's appearance by passing custom classes or using a theming mechanism. Let your creativity shine!

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className='text-blue-600' />
  ```

- Tune into theming with CSS classes or inline styles. Make RadioGroup dance to the beat of your design system.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                                   | Default     |
| ------------ | ---------- | --------------------------------------------- | ----------- |
| `options`    | `RadioOption[]` | List of radio options to display in the group | - |
| `onChange`   | `(selectedValue: string) => void` | Callback function triggered on selection | - |
| `selectedValue` | `string` | Currently selected value | - |
| `disabled`   | `boolean`  | Disables the radio group                      | `false`     |
| `size`       | `RadioSize` | Size of the radio buttons: `small`, `medium`, `large` | - |
| `variant`    | `RadioVariant` | Variant of the radio buttons: `default`, `outline`, `filled` | - |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onChange`  | `(selectedValue: string) => void` | Fired when a radio option is selected |

---

## 7. Accessibility Guidelines

This component ensures accessibility best practices:

- **ARIA roles**: RadioGroup takes on the role of `radiogroup`.
- **Keyboard Navigation**: Navigate through options using Arrow keys for a seamless selection experience.
- **Focus Management**: Handles focus when navigating options, ensuring clarity on the selected option.
- **Screen Readers**: Supports screen readers with meaningful labels for each radio button within the group.

---

## 8. Best Practices

- Give RadioGroup a label to guide users in selecting the right tune.
- Ensure each radio option has a unique label for clarity.
- Make the default selection obvious or allow no initial selection as needed.

---

## 9. Component States and Edge Cases

- Explore different states like hover, focus, error, success with RadioGroup:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} value='' />
  ```

- Handle edge cases gracefully, like showcasing an error state:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className='border-red-500' error='Please select an option.' />
  ```

- Embrace long labels without fear:

  ```jsx
  <RadioGroup options={['A very long option label that might overflow', 'Option 2']} />
  ```

---

## 10. Testing Guidelines

To ensure RadioGroup hits the right notes:

- **Unit Testing**: Use `jest radiogroup.test.js` to orchestrate tests for behavior.
- **End-to-End Testing**: Conduct `cypress run radiogroup.cy.js` for comprehensive integration tests.

---