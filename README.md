# React-JS

## 🚀 React App Creation Guide

This section provides knowledge on how to correctly create a React app using:

- `create-react-app`
- `Vite + React`

---

### ✅ Using Create React App (CRA)

```bash
npx create-react-app my-app       -->        npm run start
npm create vite@latest            -->        npm run dev
```

# 🚀 React App Setup: CRA vs Vite + Best Practices

## 📌 1. Create React App (CRA) vs Vite

| Feature              | Create React App (CRA) | Vite                               |
| -------------------- | ---------------------- | ---------------------------------- |
| **Dev Server Speed** | Slower reloads         | Instant HMR (Hot Module Reloading) |
| **Bundle Size**      | Larger                 | Smaller and optimized              |
| **function name**    | uppercase letter       | uppercase letter                   |
| **file extensions**  | .js & .jsx             | .jsx                               |

> ✅ **Recommendation**: Use **Vite** for new React projects. It’s faster, lighter, and modern & 
 > **file name** frist letter uppercase

---

## 🧠 2. Why React Function Component Names Should Be Capitalized

React **requires** component function names to start with an uppercase letter:

```js
// ✅ Correct
function MyComponent() {
  return <h1>Hello</h1>;
}

// ❌ Incorrect – React treats lowercase as DOM tags
function myComponent() {
  return <h1>Hello</h1>;
}
```

## React Fiber Architecture

#### [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file#react-fiber-architecture)


## Interview 

```js
// ✅ Correct
      setCount((count) => {return count + 1}) Is a Function
      Short Form Is setCount(count + 1) & setCount((count) => count +1)

      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
  -> plus 4

// ❌ Incorrect 
       setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1); 
  -> Not plus 4 only 1 plus
```