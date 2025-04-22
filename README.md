# alenakush-custom-modal
A simple, reusable React modal component with support for customizable styles, keyboard Escape closing, and optional buttons. Dependency-free.

## Features
✅ Pure React, no external dependencies

✅ Supports Escape key to close

✅ Click outside to close

✅ Optional buttons

✅ Fully customizable via style props

✅ Can be controlled programmatically

## Installation
```bash
npm install alenakush-custom-modal
```

## Usage
```jsx
import CustomModal from 'alenakush-custom-modal';
import { useState } from 'react';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      <CustomModal
        show={show}
        title="Success"
        message="Message was sent."
        onClose={() => setShow(false)}
        onConfirm={() => {
          setShow(false);
          console.log("Confirmed!");
        }}
        confirmLabel="OK"
        showClose={true}
        style={{
          confirmButton: { backgroundColor: '#007bff', color: '#fff' },
        }}
      />
    </div>
  );
}
```
## Props

| Prop         | Type       | Default    | Description                                                                 |
|--------------|------------|------------|-----------------------------------------------------------------------------|
| `show`       | `boolean`  | –          | Required. Controls whether the modal is visible.                           |
| `title`      | `string`   | –          | Optional title displayed at the top of the modal.                          |
| `message`    | `string`   | –          | Optional message below the title. Ignored if `children` is provided.       |
| `children`   | `ReactNode`| –          | Optional custom content. Replaces the default message if set.              |
| `onClose`    | `function` | –          | Required. Called when modal is dismissed (Escape key, backdrop, or cancel).|
| `onConfirm`  | `function` | –          | Optional callback triggered when confirm button is clicked.                |
| `confirmLabel` | `string` | –          | If set, shows a confirm button with this label. `null` hides it.             |
| `cancelLabel` | `string`  | –          | If set, shows a confirm button with this label. `null` hides it.              |
| `showClose`  | `boolean`  | `true`     | Whether to show the “×” close button in the top-right corner.              |
| `style`      | `object`   | `{}`       | Optional styles for parts of the modal (see below).                        |
| `className`  | `string`   | `""`       | Optional class for the modal box container.                                |

## Customizing Styles
You can override any part of the modal using the style prop:

```jsx
<CustomModal
  show={true}
  onClose={() => {}}
  onConfirm={() => {}}
  style={{
    overlay: {},         // Styles for the dark background overlay
    modal: {},           // Styles for the modal box
    title: {},           // Styles for the title text
    message: {},         // Styles for the default message
    content: {},         // Styles for custom content (if children is used)
    closeButton: {},     // Styles for the top-right "×" button
    buttons: {},         // Styles for the button container (layout)
    confirmButton: {},   // Styles for the Confirm button
    cancelButton: {}     // Styles for the Cancel button
  }}
/>
```
Each key targets a part of the modal layout. You can use inline styles or combine with className.

## License
Released under the MIT License.