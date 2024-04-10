import { createBrowserRouter } from "react-router-dom";
import Base from "./pages/Base.tsx";
import Home from "./pages/Home/Home.tsx";
import PagCategoria from "./pages/PagCategoria/PagCategoria.tsx";
import Produto from "./pages/Produto/Produto.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/categoria/:categoria',
        element: <PagCategoria />
      },
      {
        path: 'produto/:id',
        element: <Produto />
      }
    ]
  }
])

export default router
