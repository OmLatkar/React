import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement=React.createContext(
//   'a',
//   {href: 'http://google.com',
//     target: '_blank'
//   },
//   'Click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

