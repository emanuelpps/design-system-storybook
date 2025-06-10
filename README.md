
# 🎨 Mini Design System - React + styled-components

This small Design System includes reusable and styled components for inputs, selects, and buttons. It is built with **React**, **TypeScript**, and **styled-components**, using a variant-based approach to maintain visual consistency.

---

## 📦 Included Components

### ✅ `Button`

Reusable button component with variant support.

```tsx
import { Button } from "./components/Button";

<Button variant="primary">Save</Button>
```

**Available variants:**  
`primary`, `secondary`, `ghost`, `error`, etc.

---

### ✅ `Input`

Input field with customizable styles based on variant.

```tsx
import { Input } from "./components/Input";

<Input placeholder="Enter text..." variant="default" />
```

**Available variants:**  
Based on the definitions in `inputVariants`.

---

### ✅ `Select`

Styled select component with dynamic options.

```tsx
import Select from "./components/Select";

<Select
  options={[
    { value: "js", label: "JavaScript" },
    { value: "ts", label: "TypeScript" },
  ]}
  variant="secondary"
/>
```

---