import { createRoot } from "react-dom/client"
import App from '/component/App.jsx'

// // src/Main.jsx
// const anthropicApiKey = {import.meta.env.VITE_ANTHROPIC_API_KEY};

// // Example of how you might use it (do not expose this key in client-side code)
// console.log('API Key:', anthropicApiKey);

// ... later in your component's logic ...
// Use the key to make a secure API call to a backend server.

createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
)
