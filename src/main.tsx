import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Signup from './pages/Signup.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import AppLayout from './AppLayout.tsx'
import Cart from './pages/Cart.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: (
          // <ProtectedRoute>
          <Home />
          // </ProtectedRoute>
        ),
      },
      {
        path: ':productId',
        element: (
          //  <ProtectedRoutes>
          <ProductDetails />
          //  </ProtectedRoutes>
        ),
      },
      {
        path: '/cart',
        element: (
          // <ProtectedRoute>
          <Cart />
          // </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<AppLayout />}>
//       <Route path="" element={<Home />} />
//       <Route path="/signup" element={<Signup />} />
//       <Route path="/login" element={<Login />} />
//       <Route path=":productId" element={<ProductDetails />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
