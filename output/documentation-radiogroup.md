# RadioGroup Documentation

## 1. Component Overview

The RadioGroup component is like a DJ for your options, letting users select a single choice from a list. It's the ultimate decision-maker in your app, offering different styles, layouts, and supporting both controlled and uncontrolled states.

- **When to use**: Use RadioGroup when you need users to make a single choice from a list, like picking a favorite color, choosing a pizza topping, or deciding on a movie genre.

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
  import { RadioGroup } from '@your-library/radiogroup';
  ```

- **Global Import** (if using a larger package)
  ```javascript
  import { RadioGroup } from '@your-library/react';
  ```

---

## 4. Usage Examples

Here’s how to use this component in your application:

1. **Basic Example**:

   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} />
   ```

2. **Controlled Example**:

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

- You can jazz up the RadioGroup with custom classes or styles. Make it pop with colors, spacing, and layouts that match your app's vibe.

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className='text-blue-600' />
  ```

- Let your creativity shine by tweaking the default styles to fit your design system.

---

## 6. API Reference

### Component Props

| Prop Name    | Type       | Description                                   | Default     |
| ------------ | ---------- | --------------------------------------------- | ----------- |
| `options`    | `RadioOption[]` | List of radio options to display in the group | - |
| `onChange`   | `(selectedValue: string) => void` | Callback function triggered when a radio option is selected | - |
| `selectedValue` | `string` | Currently selected value | - |
| `disabled`   | `boolean`  | Whether the radio group is disabled           | `false`     |
| `size`       | `RadioSize` | Size of the radio buttons: 'small', 'medium', 'large' | - |
| `variant`    | `RadioVariant` | Variant of the radio buttons: 'default', 'outline', 'filled' | - |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fires when a radio option is selected |

---

## 7. Accessibility Guidelines

This component is like a gentleman, always polite and considerate. It follows accessibility best practices:

- **ARIA roles**: The RadioGroup takes on the role of `radiogroup`, guiding users through the options.
- **Keyboard Navigation**: Navigate through options using Arrow keys like a pro.
- **Focus Management**: Ensures focus shifts smoothly between options, keeping things clear.
- **Screen Readers**: Speaks the language of screen readers, providing meaningful labels for each radio button.

---

## 8. Best Practices

- Give your RadioGroup a label, like a nametag at a party, to tell users what it's all about.
- Each radio option should have a unique label, like different flavors of ice cream, to avoid mix-ups.
- Make sure the default selection is crystal clear, or start with no choice if needed.

---

## 9. Component States and Edge Cases

- Handle different states like hover, focus, error, success with finesse:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} value='' />
  ```

- Embrace the chaos of error states:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className='border-red-500' error='Please select an option.' />
  ```

- Tame the beast of long labels:

  ```jsx
  <RadioGroup options={['A very long option label that might overflow', 'Option 2']} />
  ```

---

## 10. Testing Guidelines

To ensure the RadioGroup hits all the right notes:

- **Unit Testing**: Put it through its paces with `jest`.

  ```bash
  jest radiogroup.test.js
  ```

- **End-to-End Testing**: Watch it dance with `cypress`.

  ```bash
  cypress run radiogroup.cy.js
  ```

---

This RadioGroup component is your trusty sidekick, guiding users through choices with style and grace. Let it be the maestro of your app's options, ensuring a harmonious user experience. Happy selecting! 📻🎶