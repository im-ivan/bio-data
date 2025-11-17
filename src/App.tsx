import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./components/Home"
import { GeneCatalog } from "./components/GeneCatalog"
import { MyBasket } from "./components/MyBasket"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <GeneCatalog /> },
      { path: "basket", element: <MyBasket /> },
    ],
  },
])

export default function App() {
  return (
    <div className="main-container bg-[#F2E8DF]">
      <RouterProvider router={router} />
    </div>
  )
}