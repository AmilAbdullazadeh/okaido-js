# React + Redux Toolkit + TypeScript Todo App

A modern web application showcasing best practices with React, Redux Toolkit, TypeScript, and Tailwind CSS. Features a fully-functional Todo App alongside other example components.

## ✨ Features

- 📝 **Full-featured Todo App** with CRUD operations, filtering, and persistence
- 🔄 **Redux Toolkit** for state management with TypeScript integration
- 🎨 **Tailwind CSS** for modern, responsive styling
- 📱 **Responsive design** that works on all devices
- 💾 **LocalStorage persistence** - todos saved automatically
- 🔧 **TypeScript** for type safety and better developer experience
- ⚡ **Vite** for fast development and building

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## 📚 Documentation

👉 **[Complete Development Guide](./docs/TODO_APP_GUIDE.md)** - Comprehensive documentation for developers

## 🏗️ Tech Stack

- **React 19.1.0** - UI framework
- **TypeScript 5.8.3** - Type safety
- **Redux Toolkit 2.8.2** - State management  
- **Tailwind CSS 4.1.11** - Styling framework
- **Vite 5.4.19** - Build tool and dev server

## 🎯 What's Included

### Todo App
- ➕ Add new todos with form validation
- ✏️ Edit todos inline with save/cancel
- ✅ Toggle completion status  
- 🗑️ Delete individual todos
- 🔍 Filter by All/Active/Completed
- 🧹 Clear all completed todos
- 📊 Active/completed counters
- 💾 Automatic localStorage persistence

### Redux Integration
- Centralized state management with Redux Toolkit
- Typed hooks (`useAppSelector`, `useAppDispatch`)
- Feature-based slice architecture
- Immer integration for immutable updates

### Development Features
- TypeScript for compile-time error checking
- ESLint for code quality
- Hot module replacement (HMR)
- Responsive Tailwind CSS styling

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Counter/        # Example counter component  
│   ├── Todo/           # Todo app components
│   └── Button/         # Reusable UI components
├── store/              # Redux store and slices
├── types/              # TypeScript interfaces
├── pages/              # Page components
└── App.tsx            # Main app component
```

## 🛠️ Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Deployment

The app builds to static files in the `dist/` directory. Deploy to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder  
- **GitHub Pages**: Use GitHub Actions for CI/CD

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📖 Learning Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React TypeScript Guide](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)

---

Built with ❤️ using modern web technologies.
