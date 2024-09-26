# RadioGroup Documentation

## 1. Component Overview

Welcome to the wonderful world of the `RadioGroup` component! This little gem is designed to help you gather a single choice from a list of pre-defined options. Whether you're asking users to choose their favorite Harry Potter character, their preferred mode of payment, or what type of pizza crust they want — `RadioGroup` has you covered.

- **When to use**: Use `RadioGroup` when you want the user to pick only one option out of a given set. Perfect for scenarios like gender selection, payment method choices, or setting user preferences. Basically, any time you need to enforce a monogamous relationship between the user and their choice.

---

## 2. Installation Instructions

### CLI

To get started with the `RadioGroup` component, you need to install it using your favorite package manager. Here are your options:

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

No global dependencies required — it's a clean install. You're welcome!

---

## 3. Importing the Component

You can bring the `RadioGroup` into your project in a couple of ways. Choose your own adventure:

- **Individual Import**

  ```javascript
  import { RadioGroup } from '@your-library/radiogroup';
  ```

- **Global Import** (if you're using a larger package)

  ```javascript
  import { RadioGroup } from '@your-library/react';
  ```

Just pick the method that tickles your fancy and you're good to go.

---

## 4. Usage Examples

Here’s how to sprinkle some `RadioGroup` magic into your application:

1. **Basic Example**:
   
   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} />
   ```

2. **Controlled Example**:
   
   ```jsx
   <RadioGroup 
     value='Option 2' 
     onChange={(value) => console.log(value)} 
     options={['Option 1', 'Option 2', 'Option 3']} 
   />
   ```

3. **Disabled State**:
   
   ```jsx
   <RadioGroup options={['Option 1', 'Option 2']} isDisabled />
   ```

4. **Horizontal Layout**:
   
   ```jsx
   <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} layout='horizontal' />
   ```

See? It’s like magic, but with code.

---

## 5. Customization and Theming

You can style `RadioGroup` to your heart's content. Here’s an example of how to give it some flair:

```jsx
<RadioGroup options={['Option 1', 'Option 2']} className='text-blue-600' />
```

Customize the `RadioGroup` with CSS classes or inline styles. Pass in custom class names to modify colors, spacing, and layout to fit your design system. The world is your oyster!

---

## 6. API Reference

### Component Props

| Prop Name      | Type       | Description                                            | Default        |
| -------------- | ---------- | ------------------------------------------------------ | -------------- |
| `options`      | `object[]` | List of radio options to display in the group          | `[]`           |
| `onChange`     | `function` | Callback function triggered when a radio option is selected | `undefined`    |
| `selectedValue`| `string`   | Currently selected value                               | `undefined`    |
| `disabled`     | `boolean`  | Whether the radio group is disabled                    | `false`        |
| `size`         | `string`   | Size of the radio buttons: 'small', 'medium', 'large'  | `"medium"`     |
| `variant`      | `string`   | Variant of the radio buttons: 'default', 'outline', 'filled' | `"default"`    |

### Events

| Event Name | Type                          | Description                      |
| ---------- | ----------------------------- | -------------------------------- |
| `onChange` | `(selectedValue: string) => void` | Fires when a radio option is selected |

---

## 7. Accessibility Guidelines

This component is a friend to everyone, including those using assistive technologies. Here's how it keeps things accessible:

- **ARIA roles**: The `RadioGroup` applies the role of `radiogroup` to ensure screen readers know what’s up.
- **Keyboard Navigation**: Supports navigation using Arrow keys to change the selection within the group.
- **Focus Management**: Automatically handles focus when navigating options, ensuring the selected option is focusable.
- **Screen Readers**: Provides screen reader compatibility with meaningful labels for each radio button within the group.

Accessibility matters, folks!

---

## 8. Best Practices

To make the best use of `RadioGroup`, here are some golden nuggets of wisdom:

- Always provide a label for the `RadioGroup` to indicate its purpose.
- Use distinct labels for each radio option to avoid confusion. Your users will thank you.
- Ensure that the default selected option is clear to the user, or allow no selection initially if that's your jam.

---

## 9. Component States and Edge Cases

Don’t worry, `RadioGroup` can handle all sorts of scenarios:

- **No Selection**:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2', 'Option 3']} value='' />
  ```

- **Error State**:

  ```jsx
  <RadioGroup options={['Option 1', 'Option 2']} className='border-red-500' error='Please select an option.' />
  ```

- **Long Labels**:
  
  ```jsx
  <RadioGroup options={['A very long option label that might overflow', 'Option 2']} />
  ```

From no selection to long-winded labels, `RadioGroup` has got you covered.

---

## 10. Testing Guidelines

To ensure `RadioGroup` is always in tip-top shape:

- **Unit Testing**: Use `Jest` or `React Testing Library` to test the component’s behavior.

  ```bash
  jest radiogroup.test.js
  ```

- **End-to-End Testing**: Use `Cypress` or `Playwright` for integration tests.
  
  ```bash
  cypress run radiogroup.cy.js
  ```

Because even the best of us have Googled "how to test a component" more than once.

---

And there you have it! The `RadioGroup` component in all its glory. Happy coding! May your radio buttons always be perfectly circular and your options always clear.