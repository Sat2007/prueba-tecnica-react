import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactQueryProvider from './provider/ReactQueryProvider.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryProvider>
      <RouterProvider router={router} />
    </ReactQueryProvider>
  </StrictMode>,
)
