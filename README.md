# 📦 Component Library

**Component Library** is a reusable component library built with **React**, **TypeScript**, and **SCSS**. It aims to simplify the development of modern and responsive user interfaces.

---

## 🚀 Installation

Install the library via **NPM**:

```bash
npm install component-library
# or
yarn add component-library
```

### 📂 Dependencies

- **React** `^18.3.1`
- **TypeScript** `^4.9.5`
- **SCSS** `^1.83.4`
- **Storybook** `^8.4.7`
- **Jest** `^29.7.0` + **Testing Library**

To check all installed dependencies:

```bash
npm list --depth=0
```

---

## 💻 Usage Example

Example of using the **Button** component:

```tsx
import React from 'react';
import { Button } from 'component-library';

const App = () => {
  return (
    <Button 
      label="Click Me" 
      variant="primary" 
      size="medium" 
      onClick={() => alert('Button clicked!')} 
    />
  );
};

export default App;
```

### 🎨 Button Variants

- **variant:** `"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"`
- **size:** `"small" | "medium" | "large"`
- **disabled:** `true | false`

---

## 📂 Project Structure

```
src/
├── common/         # Reusable components (Badge, Docs)
├── display/        # UI components (Card, Carousel, ListGroup)
├── feedback/       # Feedback components (Modal, Popover, Progress)
├── form/          # Form components (InputGroup, Range, Select)
├── layout/        # Layout components (Header, Navbar, HamburgerMenu)
└── navigation/    # Navigation components (Breadcrumb, Dropdown, Pagination)
```

---

## 📖 Documentation

Documentation is generated using **Storybook**.

### 🔎 Running Storybook

```bash
npm run storybook
```

The library supports **autodocs** for property and usage reference.

---

## 🧪 Testing

Tests are implemented using **Jest** and **Testing Library**.

### 🔍 Running Tests

```bash
npm run test
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open **Issues** or submit **Pull Requests**.

For details, check the [Contribution Guide](CONTRIBUTING.md).

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🚧 Project Status

🛠️ **In development** – Version **0.1.0**

📅 **Planned updates** will be added soon.

---

## 📞 Contact

📧 **Email:** raiza.silveira.medina@gmail.com

---

🖤 **Thank you for using Component Library!**
