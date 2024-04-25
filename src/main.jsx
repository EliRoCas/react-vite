import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import languages from './data/languages.js'

// Se importa router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Se importa "LanguagesViews"
import LanguagesViews from './views/LanguagesViews.jsx'


const router = [
  {
    path: "/",
    element: <App />,
  },
];

languages.forEach((lang) => {
  router.push({
    path: lang.ntitle,
    element: <LanguagesViews lang={lang} />,
  });
});

const routes = createBrowserRouter(router)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
