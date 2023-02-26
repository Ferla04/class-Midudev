# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

Pasos:
- Recupera un hecho aleatorio de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

## Crear un proyecto React desde cero
- Iniciar un proyecto de javascript en vite

  ```
  npm install vite@latest
  ```
  
- Instalacion de react y el plugin de vite de react

  ```
  npm install react react-dom @vitejs/plugin-react -E
  ```
  
- Crear un archivo `vite.config.js`

  ```
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()]
  })
  ```
  
- colocar en el `main.jsx`

  ```
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { App } from './App'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  ```
  
 ## Instalacion de eslint
- Instalar eslint

  ```
  npm install standard -D
  ```
  
- Agregar en el `package.json`

  ```
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
  ```
  
## Testing
Libreria: https://playwright.dev/

```
npm init playwright@latest
```
